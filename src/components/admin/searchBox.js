
import React, { useEffect, useState } from 'react';

const data = [ 
    {
    "id" : 1,
    "name" : "Danile Victor",
    "mobile": "3423224232"
    },
    {
        "id" : 2,
        "name" : "Sam Philip",
        "mobile": "2312312310"
    },
    {
        "id" : 3,
        "name" : "Von Rodriguz",
        "mobile": "5678999010"
    },
    {
        "id" : 4,
        "name" : "Style Dorkin",
        "mobile": "7896543212"
    }
]

const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [requestList, setRequestList] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [processRequest, setProcessRequest] = useState("Accept");

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

      const processRequestData = (e) => {
        const text = "Save";
        setProcessRequest(text, e.target.id);
      };

    return (
        <div className="wrapper">
            <section className="searchMainBox">
                <div className="row">
                    <label className='playerfield'>
                        {/* <h3>Search Player Request</h3> */}
                        <div className="searchBox">
                            <input type="text" name="search" onChange={handleChange} placeholder='Search requests...'></input>
                        </div>
                    </label>
                </div>
            </section>

            <section className="requestarea list">
                {
                        searchResults.map(({id, name, mobile}) => (
                        <div className="playerRow"> 
                            <label key={id}>
                                <div className="row">
                                    <div className="checkStyle1">
                                        <input type="checkbox"></input>
                                    </div>
                                    <div className="plyName">
                                        <span>{name}</span>
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
                                        <button type="button" onClick={ (e) => processRequestData(e)}>{processRequest}</button>
                                    </div>
                                    <div className="btnStyle4">
                                        <input type="button" value="Decline Request"></input>
                                    </div>
                                </div>
                            </label>
                        </div>  
                   ))}
            </section>
        </div>  
    )
}

export default SearchBox;