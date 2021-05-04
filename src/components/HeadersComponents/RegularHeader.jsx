
import React, {useState} from "react";
import styled from "styled-components";
import {AiOutlineFileSearch} from "react-icons/all";

const Button = styled.input`
font-size: medium;
width: 20%;
height: 90%;
background-color: red;
color: white;
transition: all 0.5s;
:hover {
  color: darkred;
}`;

const Input = styled.input`
  font-size: medium;
  flex-direction: column;
  color: ${props => props.inputColor || "palevioletred"};
  `;


const InputStyle = styled.div`
  font-size: large;
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const InputWraper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  height: 60px;
  background-color: #232323;
`;

const StyledSpan = styled.span`
  color: white;
`;

export const RegularHeader = () => {

    function handler(){
        alert("handler");
    }

    return (
        <>
            <InputWraper>
                <InputStyle>
                    <StyledSpan><AiOutlineFileSearch/>Пошук відео</StyledSpan>
                    <Input type="text" placeholder="Введіть слово для пошуку..." inputColor="black"/>
                </InputStyle>
                <Button type="submit" value="Пошук" onClick={handler}/>
            </InputWraper>
        </>
    )
}
