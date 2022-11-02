import { Fotter } from "../Footer";
import React from "react";
import {Button} from '../../Components/Botoes/index';
import {Icons} from '../../Components/IconesTopo/index';
import {Container, Logo, LogoText, TextTopo, TextDescription, Text} from './style';
import gabriel from '../../assets/gabriel.jpg';


const texto = "Um designer e programador que ama ilustrar, codar e criar coisas incríveis através do código"

function obterhora  ()  {
  let h = new Date().getHours();
  if (h <= 5) return 'Boa madrugada'
  if (h < 12) return 'Bom dia'
  if (h >= 18) return 'Boa noite'
  console.log(obterhora)
}


 function Home  () {
  return (
    <div>
        <Container>
          <Logo src={gabriel} alt="" />
          <Text>Olá, {obterhora()}</Text>
            <TextTopo>{texto}</TextTopo>
            <Icons />
            <TextDescription>ACESSE MEUS LINKS</TextDescription>
            <Button />
        </Container>
        <Fotter />

        </div>
  )
}
export {Home}