import {LinkedinLogo,InstagramLogo,GithubLogo} from '@phosphor-icons/react'
import eu from "../../assets/eu.png";
import * as S from "./styles";

const Home = () => {
  return (
    <S.Section>
      <S.ContainerCard>
        <h1 className="home-title">
          Olá,
          <br />
          Eu sou <span>Diego Chagas</span> <br />
        </h1>

        <h3>Desenvolvedor Full-Stack</h3>
        <a href="#" className="button-contact">
          Contato
        </a>
      </S.ContainerCard>

      <S.SocialIcons>
        <a href="#"><LinkedinLogo size={32} /></a>
        <a href="#"><InstagramLogo size={32} /></a>
        <a href="#"><GithubLogo size={32} /></a>
      </S.SocialIcons>

      <div>
        <img src={eu} alt="Diego" />
      </div>
    </S.Section>
  );
};

export default Home;
