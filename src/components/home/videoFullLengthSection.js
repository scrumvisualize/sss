import React from 'react';
import BackgroundVideo from '../../image/SSS-2.mp4';

const VideoFullLengthSection = () => {

    return (
        <div className="wrapper">
            <div className='row'>
                <div className="video-wrapper2">
                        <video id="videoBG" className='videoTag2' autoPlay loop muted>
                            <source src={BackgroundVideo} type='video/mp4' />
                        </video>  
                </div>
                <div className="secondVideoText">
                    <div className='bottomText2'> 
                        <h3>Training Video</h3>
                        <span className='trainingText'>
                           Sunnybank turf field is one of the best artificial turf field. 
                           The quality of the field is very good. 

                           Please have a look...
                        </span>
                    </div>
                </div>
            </div>        
        </div>
    )
}
export default VideoFullLengthSection