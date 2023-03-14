import styled from "styled-components";

interface SubtitleProps{
    children: string;
}

export function Subtitle({children}:SubtitleProps){
    return(
        <TitleTwo>{children}</TitleTwo>
    );
}

const TitleTwo = styled.h2`
    color: ${props=>props.theme.title};
    opacity: 0.8;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
`;