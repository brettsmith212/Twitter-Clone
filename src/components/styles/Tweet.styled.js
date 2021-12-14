import styled from "styled-components";

export const TweetContainer = styled.div`
  display: flex;
  border-bottom: solid 0.1rem ${({theme}) => theme.colors.extraDarkGray};
  width: 100%;
`;

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

export const TweetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    margin-top: 1rem;
    margin-bottom: 2rem;
    height: 4rem;
    background-color: ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.white};
    border: none;
    font-size: ${({theme}) => theme.fontSize.h3};
  }
`

export const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  margin-right: 2rem;
  border-top: solid 0.1rem ${({theme}) => theme.colors.extraDarkGray};
`

export const ImgWrapper = styled.div`
  display: flex;

  ion-icon {
    font-size: 2rem;
    color: ${({theme}) => theme.colors.blue};
    cursor: pointer;
    margin-right: 0.5rem;
    padding: 0.5rem;
    border-radius: 50px;
  }
  ion-icon:hover {
    background-color: ${({theme}) => theme.colors.buttonDarkHover};
  }
`

export const TweetButton = styled.button`
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.blue};
  font-size: ${({theme}) => theme.fontSize.h3};
  border-radius: 10rem;
  margin: 1rem 0;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  transition: 0.5s;

  &:hover{
    background-color: ${({theme}) => theme.colors.buttonBlueHover};
  }
`

