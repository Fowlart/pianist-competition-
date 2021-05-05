import React, {useState} from "react";
import styled from "styled-components";
import {BsFillPersonFill, FaBookOpen} from "react-icons/all";

export const FilmWrapper = styled.div`
  font-size: 19px;
  font-family: "Segoe UI", serif;
  font-stretch: ultra-expanded;
  color: black;
  width: 650px;
  height: 520px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between`;

export const FilmInfo = styled.div`
  height: 10%;
  text-align: center;
  justify-content: center;
`;

export const Card = (props) => {

    const [name,] = useState(props.name);
    const [composition,] = useState(props.composition);
    const [videoUrl,] = useState(props.videoUrl);

    function clickHandler() {
        console.log("click!");
    }

    return (
        <FilmWrapper>
            <iframe src={videoUrl} width="640" height="480"/>
            <FilmInfo>
                <span><FaBookOpen/><i>{composition}</i></span><br/>
                <span onClick={clickHandler}><BsFillPersonFill/><b>{name}</b></span>
            </FilmInfo>
        </FilmWrapper>
    );
}
