import React from "react";
import {HomeContainer, HomeWrapper} from "./styles/Home.styled"
import Tweet from "./home/Tweet"
import TwitterFeed from "./home/TwitterFeed"

function Home() {
  return (
    <HomeContainer>
      <HomeWrapper>
        <h3>Home</h3>
      </HomeWrapper>
      <Tweet />
      <TwitterFeed />
    </HomeContainer>
  )
}

export default Home;