import styled from "styled-components";

export const Botao = styled.a`
    width: 538px;
    height: 40px;
    font-family: 'Roboto';
    background: #FFFFFF;
    padding: 8px 16px 8px 8px;
    gap: 10px;
    border: 1px solid #292929;
    border-radius: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 24px;
    font-weight: 700;
    color: black;
    text-decoration: none;
    cursor: pointer;
    @media (max-width: 576px){
        width: 290px;
       
    }
    :hover{
        background: #FFFFFF;
    border: 1px solid #292929;
    box-shadow: 4px 4px 0px #292929;
    border-radius: 48px;
    transition: 0.10s;
    gap: 10px; 
     @media (max-width: 576px){
        width: 290px;
       
    }
    }
`
export const Icon = styled.img`
    margin-left: 8px;
    justify-content: flex-end;
    justify-items: flex-end;
    
`
export const Arrow = styled.img`    
    margin-left: auto;
    margin-bottom: 0;
    width: 24px;
    justify-content: flex-end;
    justify-items: flex-end;
    @media (max-width: 576px){
        width: 24px;
        margin-left: autos;

    :hover{
        stroke: white;
    }
`

export const Container = styled.div`
    svg{
        width: 20px;
        height: 20px;
    }
`
