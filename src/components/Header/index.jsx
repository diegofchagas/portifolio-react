import { Moon, Sun } from "@phosphor-icons/react";
import * as S from "./styles";
import { List } from "@phosphor-icons/react/dist/ssr";

const Header = () => {
  return (
    <S.Header> 
      {/* className = l-header */}
      <nav className="nav">
        <div>
          <a className='name' href="#">
            <span>[</span>Diego<span>]</span>
          </a>
        </div>

        <div className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              {" "}
              <a className="nav-link active-link" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="#about">
                Sobre
              </a>
            </li>
            <li>
              <a className="nav-link" href="#skills">
                Habilidades
              </a>
            </li>
            <li>
              <a className="nav-link" href="#work">
                Projetos
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact">
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div className="nag-toggle">
          <List size={20}/>
        </div>

         <div className="navs-btns">
          <Moon size={20} />
        </div>

        <div className="sun">
          <Sun size={32} />
        </div> 
      </nav>
    </S.Header>
  );
};

export default Header;
