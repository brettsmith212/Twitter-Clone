import React from "react";
import {TweetContainer, ProfileWrapper, TweetWrapper, BottomWrapper, ImgWrapper, TweetButton} from "../styles/Tweet.styled"

function Tweet() {

  return (
    <TweetContainer>
      <ProfileWrapper>
        <img src="./src/components/assets/santabarbara.jpg" alt="Profile Pic" />
      </ProfileWrapper>
    <TweetWrapper>
      <input placeholder="What's happening?" />
      <BottomWrapper>
        <ImgWrapper>
          <ion-icon name="image-outline"></ion-icon>
          <ion-icon name="accessibility-outline"></ion-icon>
          <ion-icon name="stats-chart-outline"></ion-icon>
          <ion-icon name="happy-outline"></ion-icon>
          <ion-icon name="calendar-outline"></ion-icon>
        </ImgWrapper>
        <TweetButton>Tweet</TweetButton>
      </BottomWrapper>
    </TweetWrapper>

    </TweetContainer>
  )
}

export default Tweet;