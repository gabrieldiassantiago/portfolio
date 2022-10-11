import { Botao, Icon, Arrow } from './style';
const globo: string = require("../../assets/globo.svg").default;
const arrow: string = require("../../assets/arrow.svg").default;
const write: string = require("../../assets/write.svg").default;
const newsletter: string = require("../../assets/newsletter.svg").default;
const shop: string = require("../../assets/shop.svg").default;
const sobre: string = require("../../assets/sobre.svg").default;

interface SVGProps {
    color: string;
  }

function Button () {
    return (
        <div>
        <div>
        <Botao href="https://facebook.com.br"> <Icon src={globo}/>Meu site <Arrow src={arrow}/></Botao>
        <Botao href="https://facebook.com.br"> <Icon src={write}/>Meu site <Arrow src={arrow}/></Botao>
        <Botao href="https://facebook.com.br"> <Icon src={newsletter}/>Meu site <Arrow src={arrow}/></Botao>
        <Botao href="https://facebook.com.br"> <Icon src={shop}/>Meu site <Arrow src={arrow}/></Botao>
        <Botao href="https://facebook.com.br"> <Icon src={sobre}/>Meu site <Arrow src={arrow}/></Botao>

        </div>
        </div>
    )
}
export {Button}