import React from 'react';

const PlayerOfMonth = () => {
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
                        <img src="/images/ssslogo2.png">  
                        </img>
                    </div>
                    <div className='box1 playermonth'>
                        <img src="/images/default-icon.png">  
                        </img>
                    </div>
                    <div className='box2 playermonth'>
                        <div className='plymtext'>
                            <p>
                            Mr. Sharan is our player of the month.
                            He is one of our core player in our team.
                            He is our top bloke, who contributes regularly
                            and makes huge difference during matches.
                            Thank you very much for being part of the team !
                            Appreciate all of your efforts, keep going mate !</p>
                        </div>
                    </div>
                </div>
          </div>
      </div>
    )
  }
  export default PlayerOfMonth