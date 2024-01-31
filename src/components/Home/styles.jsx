import styled from "styled-components";


export const Main = styled.main`

  section{
  max-width: 1024px;
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;
  width: calc(100% - 2rem);
  height: calc(100vh - 3rem);
  row-gap: 1rem;
  margin-inline:1rem;


  .home-img{
  position: absolute;
  right: 0;
  bottom: 0;
  width: 15.5rem;
  margin: 3rem 1.5rem;
  
  }

  img{
    background-color:${({theme})=> theme.colors.primary};
    border-radius:999px;
    object-fit:none;
    width:13.5rem;
  }
  }


  @media (max-width: 320px) {
    section{
    row-gap: 2rem;
    }

    .home-img{
      display:none;
    }
  }

  @media (max-width: 768px) {
    section{
    row-gap: 2rem;
    }

    .home-img{
      margin-inline: auto;
      width: 12.5rem;
      bottom: -5%;
      right: 1;

      img{
        width:9rem;
        object-fit:cover;
      }
    }
  }

  @media (min-width: 768px){
    section{
      padding: 8rem 0 2rem;
      height: 100vh;  
    }

    .home-img{
      img{
        width:20rem;
        height:18rem;
        object-position:50% 35%;
        }
    }
  }

  @media (min-width: 1024px){
    margin-inline:22rem;
  }


`

export const ContainerData = styled.div`
 align-self: center;

.home-title{
  font-size:${({theme})=> theme.sizes.bigFontSize};
  color:${({theme})=> theme.colors.homeTitle};
}

.home-title span{
  color:${({theme})=> theme.colors.primary};
}

.animation{
  font-size:${({theme})=> theme.sizes.bigFontSize};
  color:${({theme})=> theme.colors.homeTitle};
  margin-bottom:1.5rem;
}

@keyframes cursor {
    from {
      border-right-color: ${({theme})=> theme.colors.textColor};
    }
    to {
      border-right-color: ${({theme})=> theme.colors.titleColor};
    }
  }
  @keyframes line {
    from {
      width: 0;
    }
    to {
      width: 12.8em;
    }
  }

  .animation{
  animation: cursor 1s steps(40) infinite normal,
  line 5s steps(40) 1s normal both;
  border-right: 3px solid;
  white-space: nowrap;
  overflow: hidden;
  }

.button-contact{
    display: inline-block;
    background-color: ${({theme})=> theme.colors.primary};
    color: #fff;
    padding: .75rem 2.5rem;
    font-weight: ${({theme})=> theme.sizes.fontSemi};
    border-radius: .5rem;
}

@media (min-width: 768px){
  align-self: flex-end;
  }
`

export const SocialIcons = styled.div`
display:flex;
flex-direction:column;

.link-icon{
  width:max-content;
  margin-bottom:1rem;
  transition:all;
}

svg{
  color:${({theme})=> theme.colors.secondary};
}

.link-icon svg:hover{
  color:${({theme})=> theme.colors.primary};
  transform: scale(1.4);
  transition: .3s;
}

@media (min-width: 768px){
  padding-top: 0;
  padding-bottom: 2.5rem;
  flex-direction: row;
  align-self: flex-end;
  }

  .link-icon{
    margin-bottom:0;
    margin-right:${({theme})=> theme.sizes.mb4};
  }
`