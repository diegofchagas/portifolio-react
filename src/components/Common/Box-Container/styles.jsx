import styled from 'styled-components';

export const Box = styled.div`
  max-width: 1024px;
  display: grid;
  /* grid-template-columns:100%;
  grid-column-gap:2rem;
  width:calc(100% - 2rem); */
  margin-inline: ${({theme})=> theme.sizes.mb2}
`;
