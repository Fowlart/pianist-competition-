import React, {useRef} from "react";
import styled from "styled-components";
import {AiOutlineFileSearch, HiOutlineExclamationCircle} from "react-icons/all";
import {useDispatch, useSelector} from "react-redux";
import useWindowDimensions from "../hooks/UseWindowDimensions";

const Button = styled.input`
  margin-top: 14px;
  font-size: 15px;
  width: 15%;
 border: solid white 2px;
  background-color: black;
  color: white;
  transition: all 0.5s;

  :hover {
    color: darkred;
  }`;

const Input = styled.input`
  font-size: 15px;
  flex-direction: column;
  color: ${props => props.inputColor || "palevioletred"};
`;


const InputStyle = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 50%;
`;

const InputWraper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 60px;
`;

const StyledSpan = styled.span`
  color: white;
`;

const Error = styled.div`
  margin-top: 17px;
  font-size: 18px;
  color: red;
  text-align: center;`

const Warn = styled.div`
  margin-top: 17px;
  font-size: 18px;
  color: yellow;
  text-align: center;`

export const RegularHeader = (props) => {

    const searchField = useRef();
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();
    const {height, width} = useWindowDimensions();

    function handler() {
        let str = String(searchField.current.value);
        if (str.length < 3 || str.includes(" ")) {
            dispatch({type: "ERROR", msg: "Будбь ласка введіть більше 3 символів і не використовуйте пробіл"});
        } else {
            dispatch({type: "SEARCH", query: str});
        }
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            handler();
        }
    }

    return (
        <>
            <InputWraper>
                <InputStyle>
                    <StyledSpan><AiOutlineFileSearch/>Пошук відео по прізвищу учасника </StyledSpan>
                    <Input onKeyPress={handleKeyPress} ref={searchField} type="text"
                           placeholder="Введіть прізвище учасника..." inputColor="black"/>
                </InputStyle>
                <Button value="Пошук" type="submit" onClick={handler}/>
            </InputWraper>
            {error !== "" ? <Error><HiOutlineExclamationCircle/>{error}<HiOutlineExclamationCircle/></Error> : null}
            {props.cardCount === 0 ?
                <Warn><HiOutlineExclamationCircle/>відео не знайдені<HiOutlineExclamationCircle/></Warn> : null}
        </>
    )
}
