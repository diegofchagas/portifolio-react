import foto from "../../assets/IMG_5384.jpg";
import * as S from "./styles";

const About = () => {
  return (
    <S.Section>
      <h2>Sobre</h2>

      <div>
        <div>
          <img src={foto} alt="Diego" />
        </div>

        <div>
          <h2>Eu sou Diego Chagas</h2>

          <p>
            Desenvolvedor Full-Stack, estou graduando em Análise e
            Desenvolvimento de Sistemas pela Unopar. No momento estou estudando
            e desenvolvendo projetos web mais precisamente no Front-end, de modo
            a ampliar meus conhecimentos e assim ter um crescimento contínuo
            nessa área
          </p>
        </div>
      </div>
    </S.Section>
  );
};

export default About;
