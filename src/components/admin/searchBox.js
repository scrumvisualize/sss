
import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@material-ui/core";

const plydata = [
    {
        "id" : 1,
        "photo":"images/default-icon.png",
        "email": "test1@test.com"
    },
    {
        "id" : 2,
        "photo":"images/default-icon.png",
        "email": "test2@test.com"
    },
    {
        "id" : 3,
        "photo":"images/default-icon.png",
        "email": "test3@test.com"
    },
    {
        "id" : 4,
        "photo":"images/default-icon.png",
        "email": "test4@test.com"
    },
    {
        "id" : 5,
        "photo":"images/default-icon.png",
        "email": "test5@test.com"
    }
]

const MyDialog = ({ open, handleClose, submitData, title, children }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={submitData} color="primary">
          Ok
        </Button>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const useDialog = () => {
  const [open, setOpen] = useState(false);
  const [dataIndex,setDataIndex]=useState('')

  const openDialog = (index) => {
    setDataIndex(index);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const submitData = () => {
    console.log(plydata[dataIndex]);
    setOpen(false);
  };
  const props = {
    open,
    handleClose,
    submitData
  };
  return [openDialog, props];
};
const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [requestList, setRequestList] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [processRequest, setProcessRequest] = useState("");
    const [loadRequests, setLoadRequests] = useState(3);
    const { register, errors, handleSubmit, reset } = useForm();
    const [formRegister, setRegister] = useState({ _id: '', news: ''});
    const [playerOfMonth, setPlayerOfMonth] = useState([]);
    const [visible, setVisible] = useState(false);
    const isMounted = useRef(false);
    const [helperText, setHelperText] = useState('');
    const [newsText, setNewsText] = useState('');
    const [newsInput, setNewsInput] = useState(250);

    const [openDialog, dialogProps] = useDialog();
    const [players, setPlayers] = useState([]);
    
    useEffect(() => {
    setPlayers(plydata);
     }, []);

    const handleChange = (e) =>{
        setSearchTerm(e.target.value);
        console.log("Items:"+searchTerm);
    }
    
    useEffect(() => {
        isMounted.current = true;
        return () => isMounted.current = false;
      }, []);
    
    useEffect(() => {
            const fetchData = async () => {
              try {
                const res = await axios.get('http://localhost:8000/service/requestlist');
                if (isMounted.current) {
                  console.log("Display request data: "+res.data.requests);
                  setSearchResults(res.data.requests);
                  setRequestList(res.data.requests);
                  const processedData = res.data.requests.map((item) => {
                    if (item.status === "Yes") {
                      item.processRequest = "Save";
                    }
                    return item;
                  });
                  setSearchResults(processedData);
                }
              } catch (e) {
                if (isMounted.current) {
                }
                console.log(e);
              }
            }
            fetchData();
    }, []);

    useEffect(() => {
        setPlayerOfMonth(plydata);
    }, []);


    useEffect(() => {
        const results = requestList.filter(player =>
          player.name.toLowerCase().includes(searchTerm) || player.name.toUpperCase().includes(searchTerm) || player.mobile.includes(searchTerm)
          || player.mobile.includes(searchTerm)
        );
        setSearchResults(results);
      }, [searchTerm, requestList]);

      /* Loop through the requestList and check if item.id === e, then set to Save and return item */

      const processRequestData = (id, email) => {
          const fetchData = async () => {
            try {
              const res = await axios.post('http://localhost:8000/service/acceptplayerrequest',{email} );
              if (res.data.success) {
                setHelperText("Player accepted successfully !");
              }
            } catch (e) {
              console.log(e);
            }
          }
          fetchData();
          setSearchResults(
            searchResults.map((item) =>
              item.id === id ? { ...item, processRequest: "Save" } : item
            )
          );
      };

      const declinePlayerRequest = (e, email) =>{
        const fetchData = async () => {
            try {
              const res = await axios.put('http://localhost:8000/service/declinerequest',{email} );
              if (res.data.success) {
                setHelperText("Request has been declined !");
              }
            } catch (e) {
              console.log(e);
            }
          }
          fetchData();
        // setRequestList(
        //     requestList.map((item) => {
        //         console.log(item.id);
        //         if (item.id === e) {
        //             console.log("Which player::"+item.id);
        //           }
        //         return item;
        //    })
        //);
      }

      const showMoreRequests = () => {
        setLoadRequests((preValue) => preValue + 2);
    }
    const onSubmit = (data) => {
      const email = window.localStorage.getItem('loginEmail');
      const fetchData = async () => {
        try {
          const res = await axios.post('http://localhost:8000/service/announcement',{email, data} );
          if (res.data.success) {
            setNewsText("News sent successfully.!")
          }
        } catch (e) {
          console.log(e);
        }
      }
      fetchData();
      reset();
    };

    const newsInputHandler = (e) =>{
        let input = e.target.value;
        setNewsInput(250 - input.length);
        console.log(input);
    }

    console.log(errors);

    return (
        <div className="wrapper">
            <section className="searchMainBox">
                <div className="row">
                    <label className='playerfield'>
                        <div className="searchBox">
                            <input type="text" name="search" onChange={handleChange} placeholder='Search requests...'></input>
                        </div>
                    </label>
                </div>
            </section>
            <section className="col1">
             <h3>Players Requests</h3>
            {
                        searchResults.slice(0, loadRequests).map(({id, photo, name, email, mobile, processRequest }) => (
                        <div className='row' key={id}>
                            <div className="playerRow"> 
                                <label key={id}>
                                    <div className="row">
                                        <div className="checkStyle1">
                                            <input type="checkbox"></input>
                                        </div>
                                        <div className="plyPhoto">
                                            <img src={photo.replace('\.\.\\public\\','')}></img>
                                        </div>
                                        <div className="plyName">
                                            <span><b>{name}</b></span>
                                        </div>
                                        <div className="plyEmail">
                                            <span>{email}</span>
                                        </div>
                                        <div className="plyMobile">
                                            <span>{mobile}</span>
                                        </div>
                                        <div className="checkStyle2">
                                            <input type="checkbox"></input>
                                            <label>Member</label>
                                        </div>
                                        <div className="checkStyle3">
                                            <input type="checkbox"></input>
                                            <label>Active Player</label>
                                        </div>
                                        <div className="btnStyle4">
                                            <button type="button" onClick={ (e) => processRequestData(id, email)}>{processRequest}</button>
                                        </div>
                                        <div className="btnStyle4">
                                            <input type="button" onClick={(e) => declinePlayerRequest(id, email)} value="Decline Request"></input>
                                        </div>
                                    </div>
                                </label>
                            </div>  
                            
                        </div>
                       
                   ))} 
                   <div className="loadReqts">
                        <button onClick={() => {
                            showMoreRequests()
                        }}>Load more...</button>
                   </div>
                   <label>
                        <span className="requestValidationText">{helperText}</span>
                   </label>
            </section>
            <section className="col2">
            <h3>Announcement/ News</h3>
                <div className='newsSection'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Enter announcement/ news:</label>
                        <textarea
                         placeholder="Please enter your news here"
                         name="news"
                         maxLength="250"
                         type="text"
                            {...register("newsUpdate", { 
                              required: true,
                              pattern: {
                                message: "News field cannot be blank !"
                              }
                            })
                          }
                         onChange={newsInputHandler}
                        />
                        {/* <div>
                        {errors.news && errors.news.type === "required" && <span>News field cannot be blank !</span>}
                        </div> */}
                        <h4>{newsInput} characters left</h4>
                        <section className="col4">
                        <input type="submit" />
                        </section>  
                    </form>
                </div>
                <label>
                      <span className="newsValidationText">
                        {newsText}
                      </span>
                </label>
                
                <section className='playermonthly'>
                <h4>Player of month</h4>
                    <div className='row'>
                        {
                            playerOfMonth.map(({id, photo, email}, index) =>(
                            <div key={id} className='starPlayers'>
                                <img onClick={(e) => openDialog(index)} src={photo}></img>
                                <span className='starPlayEmail'>{email}</span>
                            </div>
                        ))}
                    </div>
                </section>
                <MyDialog {...dialogProps} title="Confirm player of month ?"></MyDialog>
            </section>
        </div>  
    )
}

export default SearchBox;