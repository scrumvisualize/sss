import React from 'react';
import { NavLink} from 'react-router-dom';
import BackgroundBottom from '../../image/img2.png';
import BackgroundVideo from '../../image/samplevideo.mp4';

let sectionStyle = {
    backgroundImage: `url("${BackgroundBottom}")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}


const BottomSection = () => {

    return (
        <div className="wrapper">
            <div className="row">
                <div style={sectionStyle} className="column4">
                    <div className='bottomText'>We know we are always good !</div>
                </div>
                
                {/* <div className="column3">
                <h2>Weekly games </h2>
                    <div className="weekly games">
                          
                        
                        <div className="watch">
                            <input name='watch' type="button" value="Watch our play"></input>
                        </div>
                    </div>
                </div> */}

                <div className="video-wrapper">
                    <video id="videoBG" className='videoTag' autoPlay loop muted>
                        <source src={BackgroundVideo} type='video/mp4' />
                    </video>  
                    <div className="video-description">
                        <p>
                          We play regularly at Salisbury, Sunnybank and Calamvale
                        </p>
                    </div>
                    <div className="watch">
                        <input name='watch' type="button" value="Watch our play"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BottomSection
