import { useState } from "react";
import { Moon, Sun, List } from "@phosphor-icons/react";
import { Link } from "react-scroll";
import * as S from "./styles";

const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false);

  const toogleMenu = () => {
    setMenuMobile(!menuMobile);
  };

  return (
    <S.Header>
      <nav className="nav">
        <p className="name" href="#">
          <span>[</span>Diego<span>]</span>
        </p>
        <div className={`nav-menu ${menuMobile ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              {" "}
              <Link
                className="nav-link active-link"
                to="Home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="About"
                py={true}
                smooth={true}
                offset={-70}
                duration={200}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="Skills"
                py={true}
                smooth={true}
                offset={-70}
                duration={200}
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="Work"
                py={true}
                smooth={true}
                offset={-70}
                duration={200}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="Contact"
                py={true}
                smooth={true}
                offset={-70}
                duration={100}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <S.ContentMobile onClick={toogleMenu}>
          <List size="20" weight="fill" />
        </S.ContentMobile>

        <S.ThemeChange>
          <div className="navs-btns">
            <Moon size="20" />
          </div>

          <div className="sun">
            <Sun size="20" />
          </div>
        </S.ThemeChange>
      </nav>
    </S.Header>
  );
};

export default Header;
