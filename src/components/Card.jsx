import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {AiFillPlaySquare, BsFillPersonFill, FaBookOpen} from "react-icons/all";
import useWindowDimensions from "../hooks/UseWindowDimensions";

const FilmWrapper = styled.div`
  font-size: 19px;
  font-family: "Segoe UI", serif;
  font-weight: 700;
  color: white;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  justify-content: center;
`;

const FilmInfo = styled.div`
  text-align: center;
`;


const IframeBox = styled.iframe`
  width: ${props => props.width};
  height: 480px;
  border: solid white 3px;
`;

export const Button = styled.button`
  color: white;
  transition: all 0.5s;
  background-color: black;
  font-size: 30px;
  padding-top: 6px;
  :hover {
    color: darkred;
  }`;

export const Card = (props) => {

    const {height, width} = useWindowDimensions();
    const [calculatedWidth, setCalculatedWidth] = useState(640);

    //handling resize
    useEffect(() => {
        if (width < 1000) setCalculatedWidth(width - 50);
        else setCalculatedWidth(640);
    }, [width]);

    const [name,] = useState(props.name);
    const [composition,] = useState(props.composition);
    const [videoUrl,] = useState(props.videoUrl);
    const [showIframe, setShowIframe] = useState(false);
    const [openVideoButtonName, setOpenVideoButtonName] = useState("Відкрити відео");

    const openVideoHandler = () => {
        setShowIframe(!showIframe);
        if (showIframe) {
            setOpenVideoButtonName("Відкрити відео");
        } else {
            setOpenVideoButtonName("Закрити відео");
        }
    }

    return (
        <FilmWrapper>
            <FilmInfo>
                <span><BsFillPersonFill/> <b>{name}</b></span>
                <br/>
                <span><FaBookOpen/> {composition}</span>
                <br/>
                <Button onClick={openVideoHandler} value={openVideoButtonName}><AiFillPlaySquare/></Button><span>{openVideoButtonName}</span>
                <br/>
                {showIframe ? <IframeBox src={videoUrl} width={calculatedWidth}/> : null}
            </FilmInfo>
        </FilmWrapper>
    );
}
