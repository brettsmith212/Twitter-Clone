import styled from "styled-components";

export const HomeContainer = styled.section`
background-color: ${({theme}) => theme.colors.black};
color: ${({theme}) => theme.colors.extraExtraLightGray};
border-right: solid 0.1rem ${({theme}) => theme.colors.extraDarkGray};
width: 45%;

display: flex;
flex-direction: column;
`

export const HomeWrapper = styled.div`
  border-bottom: solid 0.1rem ${({theme}) => theme.colors.extraDarkGray};

  h3 {
    padding: 1.4rem 3rem;
    font-size: ${({theme}) => theme.fontSize.h3};
  }
`
