import styled from "styled-components";

interface SubtitleProps{
    children: string;
}

export function Subtitle({children}:SubtitleProps){
    return(
        <h2>{children}</h2>
    );
}