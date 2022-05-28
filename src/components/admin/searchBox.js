
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const data = [ 
    {
    "id" : 1,
    "photo":"images/fit2.png",
    "name" : "Danile Victor",
    "email" : "dan@sing.com",
    "mobile": "3423224232",
     processRequest: "Accept"
    },
    {
        "id" : 2,
        "photo":"images/fit2.png",
        "name" : "Sam Philip",
        "email" : "Sam@sing.com",
        "mobile": "2312312310",
        processRequest: "Accept"
    },
    {
        "id" : 3,
        "photo":"images/fit2.png",
        "name" : "Von Rodriguz",
        "email" : "Von@sing.com",
        "mobile": "5678999010",
        processRequest: "Accept"
    },
    {
        "id" : 4,
        "photo":"images/fit2.png",
        "name" : "Style Dorkin",
        "email" : "Sam@sing.com",
        "mobile": "7896543212",
        processRequest: "Accept"
    },
    {
        "id" : 5,
        "photo":"images/fit2.png",
        "name" : "Rad",
        "email" : "Sam@sing.com",
        "mobile": "9430001212",
        processRequest: "Accept"
    },
    {
        "id" : 6,
        "photo":"images/fit2.png",
        "name" : "Mat",
        "email" : "Sam@sing.com",
        "mobile": "459943212",
        processRequest: "Accept"
    },
    {
        "id" : 7,
        "photo":"images/fit2.png",
        "name" : "Gow",
        "email" : "Sam@sing.com",
        "mobile": "7559943202",
        processRequest: "Accept"
    }
]

const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [requestList, setRequestList] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [processRequest, setProcessRequest] = useState("Accept");
    const [loadRequests, setLoadRequests] = useState(3);
    const { register, errors, handleSubmit } = useForm();

    const handleChange = (e) =>{
        setSearchTerm(e.target.value);
        console.log("Items:"+searchTerm);
    }

    useEffect(() => {
        setRequestList(data);
    }, []);


    useEffect(() => {
        const results = requestList.filter(player =>
          player.name.toLowerCase().includes(searchTerm) || player.name.toUpperCase().includes(searchTerm) || player.mobile.includes(searchTerm)
          || player.mobile.includes(searchTerm)
        );
        setSearchResults(results);
      }, [searchTerm, requestList]);

      /* Loop through the requestList and check if item.id === e, then set to Save and return item */

      const processRequestData = (e) => {
        setRequestList(
            requestList.map((item) => {
                if (item.id === e) {
                  item.processRequest = "Save";
                }
               return item;
            })
         );
      };

      const declinePlayerRequest = (e) =>{
        setRequestList(
            requestList.map((item) => {
                console.log(item.id);
                if (item.id === e) {
                    console.log("Which player::"+item.id);
                  }
                 return item;
            })
        );
      }

      const showMoreRequests = () => {
        setLoadRequests((preValue) => preValue + 2);
    }
    const onSubmit = (data) => {
        console.log("RESULT", data);
        alert(JSON.stringify(data));
      };
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
            <section class="col1">
             <h3>Players Requests</h3>
            {
                        searchResults.slice(0, loadRequests).map(({id, photo, name, email, mobile, processRequest }) => (

                        <div className='row'>
                            <div className="playerRow"> 
                                <label key={id}>
                                    <div className="row">
                                        <div className="checkStyle1">
                                            <input type="checkbox"></input>
                                        </div>
                                        <div className="plyPhoto">
                                            <img src={photo}></img>
                                        </div>
                                        <div className="plyName">
                                            <span>{name}</span>
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
                                            <button type="button" onClick={ (e) => processRequestData(id)}>{processRequest}</button>
                                        </div>
                                        <div className="btnStyle4">
                                            <input type="button" onClick={(e) => declinePlayerRequest(id)} value="Decline Request"></input>
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
            </section>
            <section className="col2">
            <h3>Announcement/ News</h3>
                <div className='newsSection'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Enter announcement/ news:</label>
                        <textarea
                            type="text"
                            {...register("newsUpdate", { required: true, maxLength: 200 })}
                        />
                        <section className="col4">
                        <input type="submit" />
                        </section>  
                    </form>
                </div>
            </section>
        </div>  
    )
}

export default SearchBox;