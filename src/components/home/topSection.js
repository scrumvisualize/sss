import React from 'react';
import { NavLink} from 'react-router-dom';
import BackgroundTop from '../../image/Great.png';
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
                    <div className="newsDate">
                        12 May 2022
                    </div>
                    <p>
                    <img src="images/lines2.png"></img>
                     <div className="annoucement updates">
                     Illo quod nemo ratione itaque dolores laudantium error vero laborum blanditiis ?
                     </div>   
                     </p>
                    <div className="newsDate">
                        08 May 2022
                    </div>
                     <p>
                     <img src="images/lines2.png"></img>
                     <div className="annoucement updates">
                     Illo quod nemo ratione itaque dolores laudantium error vero laborum blanditiis ?
                     </div>   
                     </p>
                     <div className="newsDate">
                        02 May 2022
                    </div>
                     <p>
                     <img src="images/lines2.png"></img>
                     <div className="annoucement updates">
                     Illo quod nemo ratione itaque dolores laudantium error vero laborum blanditiis ?
                     </div>   
                     </p>
                    {/* </div> */}
            
                </div>
            </section>	
            <section className="arrowSection">
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
            </section> 
        </div>
    )
}

export default TopSection;