import styled from "styled-components";

export const Heading = styled.h2`
  position: relative;
  font-size: ${({ theme }) => theme.sizes.h2FontSize};
  color: ${({ theme }) => theme.colors.titleColor};
  margin-top: ${({ theme }) => theme.sizes.mb2};
  margin-bottom: ${({ theme }) => theme.sizes.mb4};
  text-align: center;

  &::after {
    position: absolute;
    content: "";
    width: 4rem;
    height: 0.18rem;
    left: 0;
    right: 0;
    margin: auto;
    top: 2rem;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;


// .section{
//   padding-top:3rem;
//   padding-bottom:2rem;
// }