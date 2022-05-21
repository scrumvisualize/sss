import React from 'react';
import TweetEmbed from 'react-tweet-embed'

const TwitterFeeds = () => {
    return (
      <div className="wrapper">
          <div className="row">
                <div className="twitterfeeds">
                <TweetEmbed id="692527862369357824" placeholder={'loading'} />
                </div>
          </div>
      </div>
    )
  }
  export default TwitterFeeds