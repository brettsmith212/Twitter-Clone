import styled from "styled-components";

export const FeedContainer = styled.section``;

export const TweetWrapper = styled.div`
  border-bottom: solid 0.1rem ${({theme}) => theme.colors.extraDarkGray};
  display: flex;
  margin-top: 1rem;
`
export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  align-items: center;

  img {
    margin-top: 1rem;
    border-radius: 50px;
    width: 5rem;
    height: 5rem;
    object-fit: cover;
  }
`
export const TweetInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const UserInfo = styled.div`
  margin-top: 1rem;
  display: flex;
  // justify-content: space-between;
  align-items: flex-end;
  width: 30rem;

  h4 {
    font-size: ${({theme}) => theme.fontSize.h4};
    margin-right: 1rem;
    font-weight: bold;
  }

  p {
    font-size: ${({theme}) => theme.fontSize.h4};
    margin-right: 1rem;
    color: ${({theme}) => theme.colors.darkGray};
  }
`

export const Tweet = styled.div`
  margin-top: 0.2rem;

  h3 {
    font-size: ${({theme}) => theme.fontSize.h3};
  }
`

export const Symbols = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40rem;
  margin-top: 1rem;
  margin-bottom: 2rem;

  div {
    display: flex;
    align-items: center;
    margin-right: 2rem;
  }

  ion-icon {
    font-size: 2rem;
    color: ${({theme}) => theme.colors.white};
    cursor: pointer;
    margin-right: 0.5rem;
    padding: 0.5rem;
    border-radius: 50px;
  }
  ion-icon:hover {
    background-color: ${({theme}) => theme.colors.buttonDarkHover};
  }

`