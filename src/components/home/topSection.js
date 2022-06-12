import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import moment from "moment";
import BackgroundTop from '../../image/trio.png';
import BackDropTop from '../../image/backdrop.JPG';


let sectionStyle = {
    backgroundImage: `url("${BackgroundTop}")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

let sectionStyleBackdrop = {
    backgroundImage: `url("${BackDropTop}")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

const TopSection = () => {
    const { errors } = useForm();
    const isMounted = useRef(false);
    const [announcement, setAnnouncement] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get('http://localhost:8000/service/getannouncementdata');
            if (res.data) {
              console.log("Display request data: "+res.data.requests);
              res.data.requests.sort(function(a,b){
                return new Date(b.createdAt) - new Date(a.createdAt);
              });
              setAnnouncement(res.data.requests);
            }
          } catch (e) {
            console.log(e);
          }
        }
        fetchData();
}, []);
console.log(errors);

    return (
        <div className="wrapper">
            <section style={sectionStyleBackdrop} className='topmain'>
                <div  className="row">
                
                </div>
                <img src="/images/bannerImg1.png"></img>
            </section>
            <section className="columns">
                <div className="column">
                    <h2>Southside Soccer Studs</h2>
                    <div>
                    <h4>Our story</h4>
                    </div>
                    <p>
                    <div id='overlay'>
                      We started our club in 2018 at Calamvale location. We have received club registration in 2020.
                    </div>
                    </p>
                    <p>
                    <div id='overlay'>
                      In our club, we have players with age ranges between 19 to 60 years.
                      We could be self rated at division C club progressing to division B.
                    </div>
                    </p>
                    <p>
                    <div id='overlay'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione architecto necessitatibus cum praesentium dolor totam voluptatibus recusandae?
                    </div>
                    </p>
                </div>
                <div style={sectionStyle} className="column">
                    <div className='topbackdrop' >
                    </div>
                </div>
                <div className="column">
                    {/* <div className="feeds"> */}
                    <h2>Latest News/Updates:</h2>
                  
                    <div className="announcebox" id="style-7">
                    {
                     announcement.map(({id, news, createdAt}) =>(
                        <div key={id} >
                        <div className="newsDate">
                            {moment(createdAt).format("DD-MM-YYYY hh:mm")}
                        </div>
                        <p>
                        <img src="images/lines2.png"></img>
                        <div className="annoucement updates">
                        {news}
                        </div>   
                        </p>
                        </div>
                       ))}
                    </div>
                </div>
            </section>	
            {/* <section className="arrowSection">
                <div className="row">
                    <div className="col-lg-15 col-sm-6">
                        <div className='row'>
                         <div className="col-lg-15 col-sm-6">
                             <ul className='arrowText'>
                                 Stay
                             </ul>
                         </div>   
                        <img className='arrow' alt="SSS Logo" src="/images/mainline.png"></img>  
                        </div>
                    </div>
                    <div className="col-lg-15 col-sm-6">
                    <div className='row'>
                         <div className="col-lg-15 col-sm-6">
                             <ul className='arrowText'>
                                 Calm
                             </ul>
                         </div>   
                        <img className='arrow' alt="SSS Logo" src="/images/mainline.png"></img>  
                        </div>
                    </div>
                    <div className="col-lg-15 col-sm-6">
                    <div className='row'>
                         <div className="col-lg-15 col-sm-6">
                             <ul className='arrowText'>
                                 And
                             </ul>
                         </div>   
                        <img className='arrow' alt="SSS Logo" src="/images/mainline.png"></img>  
                        </div>
                    </div>
                    <div className="col-lg-15 col-sm-6">
                    <div className='row'>
                         <div className="col-lg-15 col-sm-6">
                             <ul className='arrowText'>
                                 Play
                             </ul>
                         </div>   
                        <img className='arrow' alt="SSS Logo" src="/images/mainline.png"></img>  
                        </div>
                    </div>
                    <div className="col-lg-15 col-sm-6">
                    <div className='row'>
                         <div className="col-lg-15 col-sm-6">
                             <ul className='arrowText'>
                                 Soccer 
                             </ul>
                         </div>   
                        <img className='arrow' alt="SSS Logo" src="/images/mainline.png"></img>  
                        </div>
                    </div>
                </div>
            </section>  */}
        </div>
    )
}

export default TopSection;