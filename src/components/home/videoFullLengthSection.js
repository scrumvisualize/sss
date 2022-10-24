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
                        <span>
                           Team playing at Sunnybank turf field.
                        </span>
                    </div>
                </div>
            </div>        
        </div>
    )
}
export default VideoFullLengthSection