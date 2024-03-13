import { GithubLogo, GoogleChromeLogo } from "@phosphor-icons/react";

import bike from "../../assets/bikcraft.jpg";
import todo from "../../assets/todo-list.png";
import tweetLite from "../../assets/tweetLite.png";
import timer from "../../assets/timer.png";
import controllerMoney from "../../assets/controller-money.png"
import coffeeDelivery from "../../assets/coffee-delivery.jpg"

import Title from "../Common/Title";


import * as S from "./styles";

const Works = () => {
  return (
    <S.Section id="Work">
      <Title text="Trabalhos" />
      <S.Projects>
        <S.CardProjects>
          <img src={bike} alt="logo-projeto" />
          <S.LinkContainer>
            <a
              className="link"
              href="https://github.com/diegofchagas/bikcraft"
              target="blank"
            >
              <GithubLogo size="25" />
              github
            </a>
            <a
              className="link"
              href="https://diegofchagas.github.io/bikcraft/"
              target="blank"
            >
              <GoogleChromeLogo size="25" />
              website
            </a>
          </S.LinkContainer>
        </S.CardProjects>

        <S.CardProjects>
          <img src={todo} alt="logo-projeto" />
          <S.LinkContainer>
            <a
              className="link"
              href="https://github.com/diegofchagas/todo-react/"
              target="blank"
            >
              <GithubLogo size="25" />
              github
            </a>
            <a
              className="link"
              href="https://todo-list-sand-pi.vercel.app/"
              target="blank"
            >
              <GoogleChromeLogo size="25" />
              webiste
            </a>
          </S.LinkContainer>
        </S.CardProjects>

        <S.CardProjects>
          <img src={tweetLite} alt="" />
          <S.LinkContainer>
            <a
              className="link"
              href="https://github.com/diegofchagas/tweetLite"
              target="blank"
            >
              <GithubLogo size="25" />
              github
            </a>
            <a
              className="link"
              href="https://tweet-lite-eta.vercel.app/#"
              target="blank"
            >
              <GoogleChromeLogo size="25" />
              website
            </a>
          </S.LinkContainer>
        </S.CardProjects>

        <S.CardProjects>
          <img src={timer} alt=" logo-projeto" />
          <S.LinkContainer>
            <a
              className="link"
              href="https://github.com/diegofchagas/timer"
              target="blank"
            >
              <GithubLogo size="25" />
              github
            </a>
            <a
              className="link"
              href="https://timer-management.vercel.app/"
              target="blank"
            >
              <GoogleChromeLogo size="25" />
              website
            </a>
          </S.LinkContainer>
        </S.CardProjects>

        <S.CardProjects>
          <img src={controllerMoney} alt=" logo-projeto" />
          <S.LinkContainer>
            <a
              className="link"
              href="https://github.com/diegofchagas/controller-money-web"
              target="blank"
            >
              <GithubLogo size="25" />
              github
            </a>
            <a
              className="link"
              href="https://controller-money-do9whymsy-diegofchagas.vercel.app/"
              target="blank"
            >
              <GoogleChromeLogo size="25" />
              website
            </a>
          </S.LinkContainer>
        </S.CardProjects>

        <S.CardProjects>
          <img src={coffeeDelivery} alt=" logo-projeto" />
          <S.LinkContainer>
            <a
              className="link"
              href="https://github.com/diegofchagas/coffe-delivery"
              target="blank"
            >
              <GithubLogo size="25" />
              github
            </a>
            <a
              className="link"
              href="https://coffe-delivery-7jel.vercel.app/"
              target="blank"
            >
              <GoogleChromeLogo size="25" />
              website
            </a>
          </S.LinkContainer>
        </S.CardProjects>
      </S.Projects>
    </S.Section>
  );
};

export default Works;
