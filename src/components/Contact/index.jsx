import { useState } from "react";
import emailjs from "@emailjs/browser"
import Title from "../Common/Title";
import * as S from "./styles";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const onSendMessage = (e) => {
    e.preventDefault()

    const templateParams = {
      from_name:name,
      message:message,
      email:email
    }
    
    emailjs.send("service_1n39rsp", "template_v9h6wc2",templateParams,"zr68sPSbyMI7BM5mt")
    .then((response)=>{
      alert("Mensagem enviado com sucesso")
      setName("")
      setEmail("")
      setMessage("")
      return response;
    }, (error)=>{
        alert("Mensagem não enviada" ,error.message)
    })
  }

  return (
    <S.Section id="Contact">
      <Title text="Contato" />
      <S.Container>
        <form onSubmit={onSendMessage}>
          <input
            type="text"
            placeholder="name"
            required
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <input
            type="email"
            placeholder="email"
            required
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <textarea
            name="mesangem"
            placeholder="Escreva sua mensagem aqui"
            required
            value={message}
            onChange={({ target }) => setMessage(target.value)}
          />
          <button>enviar</button>
        </form>
      </S.Container>
    </S.Section>
  );
};

export default Contact;
