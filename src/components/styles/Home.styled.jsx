import styled from "styled-components";

export const HomeContainer = styled.section`
background-color: ${({theme}) => theme.colors.black};
color: ${({theme}) => theme.colors.extraExtraLightGray};
border-right: solid 0.1rem ${({theme}) => theme.colors.extraDarkGray};
width: 45%;
`
