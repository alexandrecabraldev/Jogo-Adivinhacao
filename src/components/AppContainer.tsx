import styled from "styled-components";
import { Title } from "./Title";
import { Subtitle } from "./Subtitle";
import { Input } from "./Input";

export function AppContainer(){
    return(
        <MainContainer>
            <Title>Jogo da Adivinhação</Title>
            <Subtitle>Adivinhe o número entre 0 e 100</Subtitle>

            <Input/>
        </MainContainer>
    )
}

const MainContainer = styled.main`
    background-color: ${props=>props.theme.white};
    padding: 3rem 4rem 4rem;
    border-radius: 8px;
    box-shadow: 0px 3px 4px ${props=>props.theme.shadow};
    
`