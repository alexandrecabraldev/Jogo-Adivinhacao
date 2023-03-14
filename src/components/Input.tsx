import styled from "styled-components";
import { Button } from "./Button";

export function Input(){
    return(
        <Form>
            <InputField type={"number"}/>
            <Button>Tentar</Button>
        </Form>
    );
}

const InputField = styled.input`
    height: 100%;
    width: 100%;
    padding: 1rem 0 1rem 1rem;
    border-radius: 6px 0 0 6px;
    border: 2px solid ${props=>props.theme.numberSlot};
    background-color: ${props=>props.theme.numberSlot};

    :focus{
        outline: none;
    }

`;

const Form =styled.form`

    display: flex;
    width: 7.812rem;
    margin: 3rem auto 0;

`;