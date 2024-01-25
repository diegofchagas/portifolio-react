import bike from "../../assets/bikcraft.jpg"
import todo from "../../assets/todo-list.png"
import tweetLite from "../../assets/tweetLite.png"
import  Heading  from "../Common/Title/index"

import * as S from "./styles"

const Works = () => {
  return (
    <S.Section>
     <Heading text="Trabalhos"/>
      <S.Projects>
        <div>
          <img src={bike} alt="" />
          <p>Trabalho 1</p>
          <a href="">github</a>
          <a href="">website</a>
        </div>
        <div>
        <img src={todo} alt="" />
          <p>Trabalho 1</p>
          <a href="">github</a>
          <a href="">website</a>
        </div>
        <div>
        <img src={tweetLite} alt="" />
          <p>Trabalho 1</p>
          <a href="">github</a>
          <a href="">website</a>
        </div>
        <div>
        <img src={bike} alt="" />
          <p>Trabalho 1</p>
          <a href="">github</a>
          <a href="">website</a>
        </div>
        <div>
        <img src={todo} alt="" />
          <p>Trabalho 1</p>
          <a href="">github</a>
          <a href="">website</a>
        </div>
        <div>
        <img src={tweetLite} alt="" />
          <p>Trabalho 1</p>
          <a href="">github</a>
          <a href="">website</a>
        </div>
      </S.Projects>

    </S.Section>
  )
}

export default Works