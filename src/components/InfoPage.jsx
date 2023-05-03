import styled from "styled-components";
import React from "react";
import {BiLinkExternal, GiPodiumWinner} from "react-icons/all";
import logo from "../1163023.png";
import judges_2023 from  "./info-page-imgs/judges_2023.jpeg"
import poster_2 from "./rfs-page-imgs/rfs.png";

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Wrapper = styled.div`
  background-image: url("${logo}");
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PersonInfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;


const Person = (props) => {

    const TextSection = styled.div`
      font-family: 'Jura', sans-serif;
      background-color: black;
      color: white;
      box-shadow: darkslategray;
      margin-top: 10px;
      margin-bottom: 80px;
      margin-left: 80px;
      margin-right: 80px;
      font-weight: 1000;
      text-align: center;
      font-size: 25px;
      border-radius: 25px;
    `;

    const Image = styled.img`
      margin-top: 20px;
      margin-left: 10%;
      left: 40px;
      width: 210px;
      height: 290px;
      border-radius: 25px;
    `;


    return (<><Image src={props.imgUrl}/><TextSection>{props.text}</TextSection></>);

}

const Div = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const Div1 = styled(Div)`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const A = styled.a`
  text-align: center;
  font-family: "Segoe UI", serif;
  font-weight: 600;
  margin-top: 10px;
  margin-left: 35px;
  font-size: 25px;
  color: white;
  text-decoration: none;
  transition: all 0.5s;

  :hover {
    color: darkred;
  }
`;

const A1 = styled(A)`
  font-style: normal;
  font-size: 30px;
`;

const P = styled.div`
  left: 400px;
  font-size: 40px;
  font-family: "Segoe UI", serif;
  font-weight: 600;
  color: white;
  text-align: center;
`;

const Poster = (props) => {

    const PosterImg = styled.img`
      margin-top: 2%;
      margin-right: 5%;
      margin-left: 5%;
      margin-bottom: 5%;
      border-radius: 25px;
      filter: drop-shadow(0 0 10px rgba(100, 0, 0, 0.5));
    `;

    return (<PosterImg src={props.imgUrl}/>);
}

export const InfoPage2 = () => {
    return (<Wrapper>
            <LinkContainer>
                <A href="https://docs.google.com/document/d/1_n0nBVRw7cT8-zR_CKBQ1Z8jlty-cyIJ/edit?usp=sharing&ouid=113883921299144449053&rtpof=true&sd=true">
                    <BiLinkExternal/> Учасники проекту «Рівненські фортепіанні студії» 2023 </A>
            </LinkContainer>
            <br/>
            <P>Запрошуємо до участі у проекті</P>
            <br/>
            <Poster imgUrl={poster_2}/>
        </Wrapper>
    );
}


export const InfoPage = () => {
    return (<Wrapper>
            <LinkContainer>
                <A href="https://docs.google.com/document/d/1auoJ8rWsFopRwbNWrEph_DF6BaofMZah/edit?usp=sharing&ouid=113883921299144449053&rtpof=true&sd=true">
                    <GiPodiumWinner/> Лауреати 2021 </A>
                <A href="https://docs.google.com/document/d/1bb9IOUE7IL996NHuLs2qntV2ZS7SNb8h/edit?usp=share_link&ouid=113883921299144449053&rtpof=true&sd=true">
                    <BiLinkExternal/> Положення</A>
                <A href="https://docs.google.com/document/d/156ZGNdnMajHEzjfjrG7bD_-3v9R1GH4w/edit?usp=share_link&ouid=113883921299144449053&rtpof=true&sd=true">
                    <BiLinkExternal/> Організаційний комітет конкурсу </A>
            </LinkContainer>
            <br/>
            <P>Склад журі</P>
            <br/>
            <br/>
            <Poster imgUrl={judges_2023}/>
        </Wrapper>
    );
}
