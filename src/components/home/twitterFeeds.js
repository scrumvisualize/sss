import React from 'react';
// import TweetEmbed from 'react-tweet-embed'
//Twitter Numeric ID: 1027823021602394112

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

const TwitterFeeds = () => {
    return (
      <div className="wrapper">
        <h2>Twitter Feeds</h2>
          <div className="row">
                <span className='twitterRecords'>
                <TwitterTweetEmbed className="twitterfeeds" tweetId={'1528224701524238338'}/>
                </span>
                <span className='twitterRecords'>
                <TwitterTweetEmbed className="twitterfeeds" tweetId={'1584405664910409728'}/>
                </span>
                <span className='twitterRecords'>
                <TwitterTweetEmbed className="twitterfeeds" tweetId={'1432976961668792320'}/>
                </span>
                
          </div>
      </div>
    )
  }
  export default TwitterFeeds