import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {BsFillPersonFill, FaBookOpen} from "react-icons/all";
import useWindowDimensions from "../hooks/UseWindowDimensions";

const FilmWrapper = styled.div`
  font-size: 19px;
  font-family: "Segoe UI", serif;
  font-stretch: ultra-expanded;
  color: black;
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between`;

const FilmInfo = styled.div`
  height: 10%;
  text-align: center;
`;


const IframeBox = styled.iframe`
  width: ${props => props.width};
  height: 480px;
`;

export const Card = (props) => {

    const {height, width} = useWindowDimensions();
    const [calculatedWidth, setCalculatedWidth] = useState(640);

    //handling resize
    useEffect(() => {
        if (width<640) setCalculatedWidth(width - 50);
        else setCalculatedWidth(640);
    }, [width]);

    const [name,] = useState(props.name);
    const [composition,] = useState(props.composition);
    const [videoUrl,] = useState(props.videoUrl);

    return (
        <FilmWrapper>
            <IframeBox src={videoUrl} width={calculatedWidth}/>
            <FilmInfo>
                <span><FaBookOpen/><i>{composition}</i></span><br/>
                <span><BsFillPersonFill/><b>{name}</b></span>
            </FilmInfo>
        </FilmWrapper>
    );
}
