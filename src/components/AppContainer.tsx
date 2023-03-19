import styled from "styled-components";
import { Title } from "./Title";
import { Subtitle } from "./Subtitle";
import { Input } from "./Input";
import { ButtonSecondScreen } from "./Button";
import { useState } from "react";


export function AppContainer(){
    const [screenCondition, setScreenCondition]= useState(false);
    const [attempts, setAttempts] = useState(0);

    function handleScreenCondition(result:boolean, attempt:number){
        setScreenCondition(result);
        setAttempts(attempt);
    }

    function resetScreenCondition(){
        setScreenCondition(false);
    }

    return(
        (screenCondition)
        ?
            <MainContainer>
                <Title>
                    {
                        (attempts==1) 
                        ?
                            `Acertou em ${attempts} tentativa!`
                        :
                            `Acertou em ${attempts} tentativas!`
                    }
                </Title>
                <ButtonSecondScreen onClick={resetScreenCondition}>Jogar novamente</ButtonSecondScreen>
            </MainContainer>
        
            
        :
            <MainContainer>
                <Title>Jogo da Adivinhação</Title>
                <Subtitle>Adivinhe o número entre 0 e 100</Subtitle>

                <Input OnHandleScreenCondition={handleScreenCondition}/>
            </MainContainer>
)}

export const MainContainer = styled.main`
    background-color: ${props=>props.theme.white};
    padding: 3rem 4rem 4rem;
    border-radius: 8px;
    box-shadow: 0px 3px 4px ${props=>props.theme.shadow};

    text-align: center;
    
`