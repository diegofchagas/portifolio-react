import Title from "../Common/Title"
import * as S from "./styles"

const Contact = () => {
  return (
    <S.Section id="Contact">
      <Title text="Contato"/>
      <S.Container>
        <form className="teste">
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <textarea name="mesangem" placeholder="Escreva sua mensagem aqui"></textarea>
          <button>enviar</button>
        </form>
      </S.Container>
    </S.Section>
  )
}

export default Contact