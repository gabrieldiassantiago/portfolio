import React from "react"
import { Fotter } from "../Footer";
import {Button} from '../../Components/Botoes/index';
import {Icons} from '../../Components/IconesTopo/index';
import {Container, Logo, LogoText, TextTopo, TextDescription} from './style';
const logo: string = require("../../assets/logo2.svg").default;
const avatar: string = require("../../assets/avatar.svg").default;


 function Home  () {
  return (
    <div>
        <Container>
            <Logo src={avatar} alt="" /> <br></br>
            <LogoText src={logo} alt="" />
            <TextTopo>Um designer de UI/UX que adora codificar, ilustrar e <br></br> criando coisas 3D</TextTopo>
            <Icons />
            <TextDescription>ACESSE MEUS LINKS</TextDescription>
            <Button />
        </Container>
        <Fotter />

        </div>
  )
}
export {Home}