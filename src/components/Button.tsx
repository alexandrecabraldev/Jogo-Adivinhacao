import styled from "styled-components";

interface ButtonProps{
    children: string
}

export function Button(props:ButtonProps){
    return(
        <ButtonApp>{props.children}</ButtonApp>
    );
}

const ButtonApp = styled.button`
    background-color: ${props=>props.theme.button};
    color: ${props=>props.theme.white};
    border-radius: 0 6px 6px 0;
    padding: 1rem;
    border: none;

    font-size: 1rem;
    font-weight: 700;


`;