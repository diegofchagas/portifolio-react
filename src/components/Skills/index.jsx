
import {FaReact, FaNodeJs, FaHtml5,FaCss3} from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import * as S from "./styles";

const Skills = () => {
  return (
    <S.Container>
      <div>
        <h2>Tecnologias</h2>
        <p>
          Estas são as tecnologias que tenho contato no momento. Estou sempre
          disposto a aprender novas tecnologias.
        </p>

<div>
        <div>HTML
        <FaHtml5 />
        </div>
        <div>CSS
        <FaCss3 />
        </div>
        <div>JAVASCRIPT
        <IoLogoJavascript/>
        </div>
        <div>NODEJS
        <FaNodeJs />
        </div>
        <div>REACTJS

          <FaReact size={40}/>
        </div>
        <div>MONGODB
        <DiMongodb />
        </div>
        <div>TYPESCRIPT
        <SiTypescript />
        </div>
</div>
       
      </div>
    </S.Container>
  );
};

export default Skills;
3