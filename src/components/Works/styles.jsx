import styled from "styled-components";

export const Section = styled.section`
  padding-top: 3rem;
  padding-bottom: 2rem;
  text-align: center;

  img {
  width: 300px;
  }

  @media (min-width: 768px) {
    padding-top: 4rem;
    padding-bottom: 3rem;
  }
`;
export const Projects = styled.div`
  max-width: 1024px;
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;
  width: calc(100% - 2rem);
  margin-inline: 1rem;
  row-gap:2rem;
  

  .card-project{
  box-shadow: 0 4px 25px rgba(14, 36, 49, .15);
  border-radius: .5rem;
  overflow:hidden;
  

  img{
    width:320px;
    height:220px;
    transition:1s;
    cursor: pointer;
  }

  img:hover{
    transform:scale(1.1)
  }

  .link{
    margin-block:.8rem;
    margin-inline:10px;
    display: inline-block;
    background-color: ${({theme})=> theme.colors.primary};
    color: #fff;
    padding: .65rem 2.1rem;
    border-radius: .5rem; 
  }
  
  }

  @media (min-width: 768px) {
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(2,1fr);
  column-gap: 2rem;
  }

  @media (min-width: 1024px) {
    margin-inline: auto;
  }
`;
