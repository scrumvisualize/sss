import React, { useRef, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

import axios from 'axios'
const Team = () => {
    const [squadList, setSquadList] = useState([]);
    const { errors } = useForm();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get('http://localhost:8000/service/activesquadlist');
              console.log("Display request data: "+res.data.active);
              setSquadList(res.data.active);
          } catch (e) {
            console.log(e);
          }
        }
        fetchData();
}, []);
console.log(errors);

    return (
        <div id="App">  
                <div className="squadlist">
                    <hr></hr>
                    <img src="/images/icon_t_1.png"></img>
                        <div className="row">   
                            <div className="squads">
                            {
                             squadList.map(({id, name, photo}) =>(  
                                <div  key={id} className="box a">
                                    <img src={photo.replace('\.\.\\public\\','')}/>
                                    <section className="squaddetails">
                                    <span><b>{name}</b></span>
                                    </section>
                                    <section className="squaddetails">
                                    <span>Forward</span>
                                    </section>
                                </div>
                                ))}
                            </div>

                        </div> 
                </div>
        </div>
    )

}
export default Team;