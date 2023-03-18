import styled from "styled-components";
import { Button } from "./Button";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";


export function Input(){
    const [value, setValue] = useState("");
    const [randomNumber, setRandomNumber]=useState<number|string>(0);

    useEffect(() => {
        let numero =Math.floor(Math.random()* 10);
        
        if(numero==0){
            numero=1;
            setRandomNumber(numero);
        }else{
            setRandomNumber(numero);
        }
        console.log(numero);
        
    },[]);
    
    

    function handleInput(event: ChangeEvent<HTMLInputElement>){
        const valueInput= event.target.value;

        setValue(valueInput);
    }

    function handleSubmit(event:FormEvent){
        event.preventDefault();
        
        if(randomNumber==value){
            console.log("ACERTOU");
        }else{
            console.log("errou");
        }

        setValue("");
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