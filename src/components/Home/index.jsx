import { LinkedinLogo, InstagramLogo, GithubLogo } from "@phosphor-icons/react";
import eu from "../../assets/eu.png";
import * as S from "./styles";

const Home = () => {
  return (
    <S.Main>
      <section>
        <S.ContainerData>
          <h1 className="home-title">
            Olá,
            <br />
            Eu sou <span>Diego Chagas</span> <br />
          </h1>
          <h3 className="animation">Desenvolvedor FullStack</h3>
          <a href="#" className="button-contact">
            Contato
          </a>
        </S.ContainerData>

        <S.SocialIcons>
          <a href="https://www.linkedin.com/in/diego-fernandes-chagas/" target="_blank" rel="noreferrer" className="link-icon" >
            <LinkedinLogo size="32" />
          </a>
          <a href="https://www.instagram.com/diegochagas.dev/" target="_blank" rel="noreferrer" className="link-icon">
            <InstagramLogo size="32" />
          </a>
          <a href="https://github.com/diegofchagas" target="_blank" rel="noreferrer" className="link-icon">
            <GithubLogo size="32" />
          </a>
        </S.SocialIcons>

        <div className="home-img">
          <img src={eu} alt="Diego" />
        </div>
      </section>
    </S.Main>
  );
};

export default Home;
