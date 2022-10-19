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
    border-radius: 90px;
`
export const LogoText = styled.img`
    margin-top: 16px;
`
export const TextTopo = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    line-height: 26px;
    text-align: center;
    width: 350px;
    height: auto;
    text-align: center;
    padding: 2px;
    font-weight: 500;
    font-size: 15px;
    align-items: flex-start;
    @media (max-width: 576px){
        font-size: 15px;
    }
`
export const TextDescription = styled.h1`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #555761;
    margin: 16px;
    margin-top: 35px;
    margin-left: 20px;
`

export const Text = styled.h1`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 29px;
`