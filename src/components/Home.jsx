import React from "react";
import {HomeContainer} from "./styles/Home.styled"
import Tweet from "./home/Tweet"

function Home() {
  return (
    <HomeContainer>
      <div><h3>Home</h3></div>
      <Tweet />
    </HomeContainer>
  )
}

export default Home;