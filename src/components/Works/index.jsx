import { GithubLogo, GoogleChromeLogo } from "@phosphor-icons/react";
import bike from "../../assets/bikcraft.jpg"
import todo from "../../assets/todo-list.png"
import tweetLite from "../../assets/tweetLite.png"
import  Title  from "../Common/Title"

import * as S from "./styles"

const Works = () => {
  return (
    <S.Section id="Work">
     <Title text="Trabalhos"/>
      <S.Projects>
        <div className="card-project">
          <img src={bike} alt="logo-projeto" />
          <a className="link" href="https://github.com/diegofchagas/bikcraft" target="blank">
            <GithubLogo size="25"/>
            
          </a>
          <a className="link" href="https://diegofchagas.github.io/bikcraft/" target="blank"> <GoogleChromeLogo size="25"/></a>
        </div>
        <div className="card-project">
        <img src={todo} alt="logo-projeto" />
        <a className="link" href="https://github.com/diegofchagas/todo-react/" target="blank">
            <GithubLogo size="25"/>
          </a>
          <a className="link" href="https://todo-list-sand-pi.vercel.app/" target="blank"> <GoogleChromeLogo size="25"/></a>
        </div>
        <div className="card-project">
        <img src={tweetLite} alt="" />
        <a className="link" href="https://github.com/diegofchagas/bikcraft" target="blank">
            <GithubLogo size="25"/>
          </a>
          <a className="link" href="https://diegofchagas.github.io/bikcraft/" target="blank"> <GoogleChromeLogo size="25"/></a>
        </div>
        <div className="card-project">
        <img src={bike} alt=" logo-projeto" />
        <a className="link" href="https://github.com/diegofchagas/bikcraft" target="blank">
            <GithubLogo size="25"/>
          </a>
          <a className="link" href="https://diegofchagas.github.io/bikcraft/" target="blank"> <GoogleChromeLogo size="25"/></a>
        </div>
        <div className="card-project">
        <img src={todo} alt=" logo-projeto" />
        <a className="link" href="https://github.com/diegofchagas/bikcraft" target="blank">
            <GithubLogo size="25"/>
          </a>
          <a className="link" href="https://diegofchagas.github.io/bikcraft/" target="blank"> <GoogleChromeLogo size="25"/></a>
        </div>
        <div className="card-project">
        <img src={tweetLite} alt=" logo-projeto" />
        <a className="link" href="https://github.com/diegofchagas/bikcraft" target="blank">
            <GithubLogo size="25"/>
          </a>
          <a className="link" href="https://diegofchagas.github.io/bikcraft/" target="blank"> <GoogleChromeLogo size="25"/></a>
        </div>
      </S.Projects>

    </S.Section>
  )
}

export default Works