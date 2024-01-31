import { LinkedinLogo, InstagramLogo,GithubLogo,ArrowUp } from "@phosphor-icons/react"
import * as S from "./styles"


const Footer = () => {
  return (
    <S.Footer>
      <span>Diego Chagas</span>
      <S.SocialLinks>
        <a href="https://www.linkedin.com/in/diego-fernandes-chagas/" className="link-icon">
          <LinkedinLogo size="32" weight="fill"/>
        </a>
        <a href="https://www.instagram.com/diegochagas.dev/" className="link-icon">
        <InstagramLogo size="32" weight="fill"/>
        </a>
        <a href="https://github.com/diegofchagas" className="link-icon">
        <GithubLogo size="32" weight="fill"/>
        </a>
      </S.SocialLinks>
      <p>&#169; 2022 copyright all right reserved</p>
      <ArrowUp size="32" weight="fill" />
    </S.Footer>
    
  
  )
}

export default Footer