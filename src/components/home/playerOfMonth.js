import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'

const PlayerOfMonth = () => {

const [playerMonth, setPlayerMonth] = useState([]);
const isMounted = useRef(false);

useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axios.get('http://localhost:8000/service/get/playerofmonth');
            setPlayerMonth(res.data.sqlQuery[0]);
          } catch (e) {
           console.log(e);
          }
        }
        fetchData();
}, []);

    return (
      <div className="wrapper">
          <h2>Player of the month</h2>
          <div className="row">
                <div className="player-month">
                <div className='box3 plyarrow'>
                        <img src="/images/plyarrow2.png">  
                        </img>
                    </div>
                    <div className='box1 playermonth'>
                        <img src="/images/badge.png">  
                        </img>
                    </div>
                    {
                     playerMonth.map(({id, name, photo}) =>(  
                     <div key={id}>    
                    <div className='box1 playermonth'>
                        <img src={photo}>  
                        </img>
                    </div>
                    <div className='box2 playermonth'>
                        <div className='plymtext'>
                            <p>
                            Mr. {name} is our player of the month.
                            He is one of our core player in our team.
                            He is our top bloke, who contributes regularly
                            and makes huge difference during matches.
                            Thank you very much for being part of the team !
                            Appreciate all of your efforts, keep going mate !</p>
                        </div>
                    </div>
                    </div>
                   )) }
                </div>
          </div>
      </div>
    )
  }
  export default PlayerOfMonth