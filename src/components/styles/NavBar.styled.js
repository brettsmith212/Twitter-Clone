import styled from "styled-components"

export const NavBarContainer = styled.nav`
width: 25%;
height: 100vh;
background-color: ${({ theme }) => theme.colors.black};
color: ${({ theme }) => theme.colors.extraExtraLightGray};
display: flex;
flex-direction: column;
align-items: flex-end;
border-right: solid 0.1rem ${({theme}) => theme.colors.extraDarkGray};

h3 {
  font-size: ${({ theme }) => theme.fontSize.h3};
  color: ${({ theme }) => theme.colors.extraExtraLightGray};
  margin-left: 1.4rem;
}

ion-icon {
  font-size: 2.4rem;
  color: ${({theme}) => theme.colors.white};
}
`;

export const NavBarWrapper = styled.div`
width: 80%;
// border: 1px solid red;
display: flex;
flex-direction: column;
align-items: flex-start;
margin-right: 1rem;
`;

export const MenuItem = styled.button`
display: flex;
justify-content: flex-start;
align-items: center;
background-color: ${({theme}) => theme.colors.black};
cursor: pointer;
border: none;
// margin: 0.5rem 0;
padding: 1.5rem;
border-radius: 5rem;

&:hover{
  background-color: ${({theme}) => theme.colors.buttonDarkHover};
}
`

export const TweetButton = styled.button`
color: ${({theme}) => theme.colors.white};
background-color: ${({theme}) => theme.colors.blue};
font-size: ${({theme}) => theme.fontSize.h3};
border-radius: 10rem;
margin: 1rem 0;
padding: 2rem 9rem;
border: none;
cursor: pointer;
transition: 0.5s;

&:hover{
  background-color: ${({theme}) => theme.colors.buttonBlueHover};
}
`