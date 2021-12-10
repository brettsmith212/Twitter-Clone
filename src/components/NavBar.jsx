import React from "react"
import { NavBarContainer, NavBarWrapper, MenuItem, TweetButton } from "./styles/NavBar.styled"

function NavBar() {

  return (
  <NavBarContainer>
    <NavBarWrapper>
      <MenuItem>
      <ion-icon name="logo-twitter"></ion-icon>
      </MenuItem>
      <MenuItem>
        <ion-icon name="home"></ion-icon>
        <h3>Home</h3>
      </MenuItem>
      <MenuItem>
        <ion-icon name="search-outline"></ion-icon>
        <h3>Explore</h3>
      </MenuItem>
      <MenuItem>
        <ion-icon name="notifications-outline"></ion-icon>
        <h3>Notifications</h3>
      </MenuItem>
      <MenuItem>
        <ion-icon name="mail-outline"></ion-icon>
        <h3>Messages</h3>
      </MenuItem>
      <MenuItem>
        <ion-icon name="bookmark-outline"></ion-icon>
        <h3>Bookmarks</h3>
      </MenuItem>
      <MenuItem>
        <ion-icon name="list-outline"></ion-icon>
        <h3>Lists</h3>
      </MenuItem>
      <MenuItem>
        <ion-icon name="person-outline"></ion-icon>
        <h3>Profile</h3>
      </MenuItem>
      <MenuItem>
        <ion-icon name="ellipsis-horizontal-circle-outline"></ion-icon>
        <h3>More</h3>
      </MenuItem>
      <TweetButton>Tweet</TweetButton>
    </NavBarWrapper>
  </NavBarContainer>
  )
}

export default NavBar;