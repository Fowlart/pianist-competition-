import React, {useRef} from "react";
import styled from "styled-components";
import {AiOutlineFileSearch, HiOutlineExclamationCircle} from "react-icons/all";
import {useDispatch, useSelector} from "react-redux";

const Button = styled.input`
  font-size: 15px;
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
  justify-content: center;
  flex-direction: row;
  height: 60px;
`;

const StyledSpan = styled.span`
  color: white;
`;

const Error = styled.div`
  font-size: 22px;
  color: red;
  text-align: center;`

const Warn = styled.div`
  font-size: 22px;
  color: yellow;
  text-align: center;`

export const RegularHeader = (props) => {

    const searchField = useRef();
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();

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
