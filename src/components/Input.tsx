import styled from "styled-components";
import { Button } from "./Button";
import { ChangeEvent, FormEvent, useState } from "react";


export function Input(){
    const [value, setValue] = useState("");
    console.log(value);

    function handleInput(event: ChangeEvent<HTMLInputElement>){
        const valueInput= event.target.value;

        setValue(valueInput);
       
    }

    function handleSubmit(event:FormEvent){
        event.preventDefault();
    }

    return(
        <Form onSubmit={handleSubmit}>
            <InputField type={"number"} max={9} placeholder={"0"} onChange={handleInput} value={value}/>
            <Button>Tentar</Button>
        </Form>
    );
}





const InputField = styled.input`
    height: 100%;
    width: 100%;
    padding: 1rem 0.8rem 1rem 0.8rem;
    border-radius: 6px 0 0 6px;
    border: 2px solid ${props=>props.theme.numberSlot};
    background-color: ${props=>props.theme.numberSlot};
    outline: none;

    ::-webkit-inner-spin-button, ::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
    }

`;

const Form =styled.form`

    display: flex;
    width: 7.812rem;
    margin: 3rem auto 0;

`;