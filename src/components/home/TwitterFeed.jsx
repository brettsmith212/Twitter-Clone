import React from 'react';
import { FeedContainer, 
TweetWrapper, 
ProfileWrapper, 
TweetInfo, 
UserInfo, 
Tweet,
Symbols } from "../styles/TwitterFeed.styled"
import { data } from "../data/data"

function TwitterFeed() {
  const twitterFeed = data.map(tweet => {
    
    return (
      <TweetWrapper>
        <ProfileWrapper>
          <img src="./src/components/assets/santabarbara.jpg" />
        </ProfileWrapper>
        <TweetInfo>
          <UserInfo>
            <h4>{tweet.displayName}</h4>
            <p>{tweet.userName}</p>
            <p>{tweet.timeStamp}</p>
          </UserInfo>
          <Tweet>
            <h3>{tweet.tweetText}</h3>
          </Tweet>
          <Symbols>
            <div>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <p>{tweet.totalComments}</p>
            </div>
            <div>
              <ion-icon name="repeat-outline"></ion-icon>
              <p>{tweet.totalRetweets}</p>
            </div>
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <p>{tweet.totalLikes}</p>
            </div>
            <ion-icon name="share-outline"></ion-icon>
          </Symbols>
        </TweetInfo>
      </TweetWrapper>
    )
  })

  return (
    <FeedContainer>{twitterFeed}</FeedContainer>
  )
}

export default TwitterFeed;