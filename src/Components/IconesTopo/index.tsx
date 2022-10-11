import React from 'react'
import {Icon, ContainerBar} from './style';
const twitter: string = require("../../assets/twitter.svg").default;
const drible: string = require("../../assets/drible.svg").default;
const figma: string = require("../../assets/figma.svg").default;
const linkdin: string = require("../../assets/linkdin.svg").default;

 function Icons () {
    return( 
        <div>
            <ContainerBar>
            <Icon src={twitter} alt="" />
            <Icon src={drible} alt="" />
            <Icon src={figma} alt="" />
            <Icon src={linkdin} alt="" />
            </ContainerBar>
        </div>
    )
}
export {Icons}