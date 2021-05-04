import Input from "../UI/Input.styled";
import Button from "../UI/Button.styled";
import React, {useState} from "react";
import styled from "styled-components";
import {AiOutlineFileSearch} from "react-icons/all";

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

    return (
        <>
            <InputWraper>
                <InputStyle>
                    <StyledSpan><AiOutlineFileSearch/>Пошук відео</StyledSpan>
                    <Input type="text" placeholder="Введіть слово для пошуку..." inputColor="black"/>
                </InputStyle>
                <Button type="submit" value="Пошук"/>
            </InputWraper>
        </>
    )
}
