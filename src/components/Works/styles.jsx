import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 4rem;
  padding-bottom: 3rem;
  text-align:center;

h2{
  position:relative;
  font-size:${({theme})=> theme.sizes.h2FontSize};
  color:${({theme})=> theme.colors.titleColor };
  margin-top:${({theme})=> theme.sizes.mb2 };
  margin-bottom:${({theme})=> theme.sizes.mb4 };
  text-align:center;
}

h2::after{
  position:absolute;
  content: "";
  width: 4rem;
  height: 0.18rem;
  left: 0;
  right: 0;
  margin: auto;
  top: 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
}

img{
  width:300px;
}
  
`;
export const Projects = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  align-items:center;
`;