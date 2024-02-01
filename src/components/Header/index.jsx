import { Moon, Sun,List } from "@phosphor-icons/react";
import * as S from "./styles";
import { useState } from "react";

const Header = () => {
  const [menuMobile , setMenuMobile] = useState(false);

  const toogleMenu = () =>{
    setMenuMobile(!menuMobile)
  }

  return (
    <S.Header>
      <nav className="nav">
        <div>
          <a className="name" href="#">
            <span>[</span>Diego<span>]</span>
          </a>
        </div>

        <div className={`nav-menu ${menuMobile ? 'open' : ''}`}>
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

        <S.ContentMobile onClick={toogleMenu}>
          <List size="20" weight="fill" />
        </S.ContentMobile>

        <div className="navs-btns">
          <Moon size="20" />
        </div>

        <div className="sun">
          <Sun size="20" />
        </div>
      </nav>
    </S.Header>
  );
};

export default Header;
