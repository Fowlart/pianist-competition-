import React from "react";
import styled from "styled-components";
import {AiOutlineFileSearch} from "react-icons/all";

const Button = styled.input`
  font-size: medium;
  margin-top: 23px;
  margin-left: 10px;
  width: 15%;
  height: 45%;
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
  height: 50%;
`;

const InputWraper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 60px;
  background-color: #232323;
`;

const StyledSpan = styled.span`
  color: white;
`;

export const RegularHeader = () => {

    function handler() {
        alert("handler");
    }

    return (
        <>
            <InputWraper>
                <InputStyle>
                    <StyledSpan><AiOutlineFileSearch/>Пошук відео</StyledSpan>
                    <Input type="text" placeholder="Введіть прізвище/ім'я учасника..." inputColor="black"/>
                </InputStyle>
                <Button type="submit" value="Пошук" onClick={handler}/>
            </InputWraper>
        </>
    )
}
