import styled from "styled-components";

interface PropsTitle{
    children: string;
}

export function Title(props:PropsTitle){
    return(
        <>
            <TitleText>{props.children}</TitleText>
            
        </>
    );
}

const TitleText = styled.h1`
    color: ${({theme})=>theme.title};
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.8rem;
    margin-bottom: 1rem;
    text-align: center;
`