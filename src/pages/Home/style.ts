import styled from "styled-components"

export const Container = styled.div`
    align-items: center;
    margin : auto;
    align-items : center;
    padding: 84px 24px 24px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    @media (max-width: 576px){
        margin-left: 0;
    }
`
export const Logo = styled.img`
`
export const LogoText = styled.img`
    margin-top: 16px;
`
export const TextTopo = styled.h1`
    font-family: 'Space Grotesk';
    font-style: normal;
    line-height: 26px;
    text-align: center;
    width: 546px;
    height: 52px;
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    align-items: flex-start;
    @media (max-width: 576px){
        font-size: 15px;
    }
`
export const TextDescription = styled.h1`
    font-family: 'Space Grotesk';
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #555761;
    margin: 16px;
`
