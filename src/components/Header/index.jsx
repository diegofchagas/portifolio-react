import {Moon,Sun} from '@phosphor-icons/react'
import * as S from './styles'

const Header = () => {
  return (
   
    <S.Header>
    <nav className='nav bd-grid'>
      <div>
        <a href="#"><span>[</span>Diego<span>]</span></a>
      </div>
         
      <div className='nav-menu'>
        <ul className='nav-list'>
          <li> <a className='nav-link' href="#home">Home</a></li>
          <li><a className='nav-link' href="#about">Sobre</a></li>
          <li><a className='nav-link' href="#skills">Habilidades</a></li>
          <li><a className='nav-link' href="#work">Projetos</a></li>
          <li><a className='nav-link' href="#contact">Contato</a></li>
        </ul>
      </div>

      <div className='navs-btns'>
      <Moon size={32} />
     </div>

      <div className='sun'>
      <Sun size={32} />


      </div>

    </nav>
  </S.Header>
  )
}

export default Header