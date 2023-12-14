import styled from "styled-components";


export const Section = styled.section`
    height: calc(100vh - 3rem);
   // row-gap: 1rem;

`

export const ContainerCard = styled.div`

.home-title{
  font-size:${({theme})=> theme.sizes.bigFontSize};
  margin-bottom:0;
  color:${({theme})=> theme.colors.homeTitle};
}

.button-contact{
    display: inline-block;
    background-color: ${({theme})=> theme.colors.primary};
    color: #fff;
    padding: .75rem 2.5rem;
    font-weight: ${({theme})=> theme.sizes.fontSemi};
    border-radius: .5rem;
}
`

export const SocialIcons = styled.div`
display:flex;
gap: 20px;

`