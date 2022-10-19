import { Fotter } from "../Footer";
import React from "react";
import {Button} from '../../Components/Botoes/index';
import {Icons} from '../../Components/IconesTopo/index';
import {Container, Logo, LogoText, TextTopo, TextDescription, Text} from './style';
import gabriel from '../../assets/gabriel.jpg';

function obterhora  ()  {
  let h = new Date().getHours();
  if (h <= 5) return 'Boa madrugada'
  if (h < 12) return 'Bom dia'
  if (h >18) return 'Boa noite'
}


 function Home  () {
  return (
    <div>
        <Container>
          <Logo src={gabriel} alt="" />
          <Text>Olá, {obterhora()}</Text>
            <TextTopo>Um designer UI/UX que adora programar, ilustrar e <br></br> criar coisas incríveis com o código</TextTopo>
            <Icons />
            <TextDescription>ACESSE MEUS LINKS</TextDescription>
            <Button />
        </Container>
        <Fotter />

        </div>
  )
}
export {Home}