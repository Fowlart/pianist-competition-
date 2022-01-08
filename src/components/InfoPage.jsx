import styled from "styled-components";
import React from "react";
import {BiLinkExternal, GiPodiumWinner} from "react-icons/all";
import logo from "../1163023.png";
import person1 from "./info-page-imgs/Закопець-1.png";
import person2 from "./info-page-imgs/Кузнєцова-1.png";
import person3 from "./info-page-imgs/Іванова Л.І.png";
import person4 from "./info-page-imgs/Райт І.С.png";
import person5 from "./info-page-imgs/Остапчук М. М.png";
import person6 from "./info-page-imgs/Марцева-1.png";
import person7 from "./info-page-imgs/Заходякін-1.png";
import person8 from "./info-page-imgs/Вишневська-1.png";



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

    const Container = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    `;

    const TextSection = styled.div`
      color: white;
      margin-top: 10px;
      margin-bottom: 80px;
      margin-left: 80px;
      margin-right: 80px;
      font-family: "Segoe UI", serif;
      font-weight: 1000;
      text-align: center;
      font-size: 20px;
    `;

    const Image = styled.img`
      margin-top: 20px;
      margin-right: 30%;
      margin-left: 30%;
      border: solid white 2px;
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
  flex-direction:column;
`;

const A = styled.a`
  text-align: center;
  font-family: "Segoe UI", serif;
  font-style: oblique;
  font-weight: 600;
  margin-top: 20px;
  font-size: 20px;
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
  font-style: oblique;
  font-weight: 600;
  color: white;
  text-align: center;
`;


export const InfoPage = () => {
    return (<Wrapper><Div1>
        <A1 href="https://docs.google.com/document/d/1auoJ8rWsFopRwbNWrEph_DF6BaofMZah/edit?usp=sharing&ouid=113883921299144449053&rtpof=true&sd=true">
            <GiPodiumWinner/> ЛАУРЕАТИ «ВСЕУКРАЇНСЬКОГО КОНКУРСУ ПІАНІСТІВ. РІВНЕ-2021»  <GiPodiumWinner/></A1>
        <A href="https://docs.google.com/document/d/1ka7GuVc0mhHzR5jq1qhTCHnlNa0HcXmB/edit?usp=sharing&ouid=113883921299144449053&rtpof=true&sd=true"> <BiLinkExternal/>Положення</A>
        <A href="https://docs.google.com/document/d/1qdyL0mXafowI888sPJLyM7yuhYJNR70b/edit?usp=sharing&ouid=113883921299144449053&rtpof=true&sd=true"> <BiLinkExternal/>
            Організаційний комітет конкурсу </A>
        <A href="https://drive.google.com/file/d/1UamUwOwZ5BVlNBm9y62CKDHhi0zYJKqx/view?usp=sharing&ouid=113883921299144449053&rtpof=true&sd=true"> <BiLinkExternal/>  Афіша</A>
    </Div1>
        <P>Склад журі:</P>
        <PersonInfoSection>
            <Person imgUrl={person2}
                    text={`Кузнєцова О.О.- голова журі, доктор філософії, кандидат педагогічних наук, професор кафедри  
                    музично- інструментального виконавства Харківського Національного педагогічного університету імені 
                    Г.Сковороди, заслужений діяч мистецтв України,  "Відмінник освіти України", відзначена орденом 
                    Міністерства культури  України "За досягнення в розвитку  культури  і мистецтв ", секретар 
                    Національної всеукраїнської музичної спілки, голова Асоціації піаністів  Національної  всеукраїнської 
                    музичної спілки,  президент Асоціації піаністів-педагогів України("EPTA" Ukraine), Віце- президент  
                    Асоціації піаністів-педагогів Європи "EPTA" London)`}/>

            <Person imgUrl={person1}
                    text="Закопець Л.С.- голова журі, заслужений  діяч мистецтв України, викладач-методист Львівського
                    державного музичного ліцею імені С. Крушельницької, почесний амбасадор музичної  культури  Польщі"/>

            <Person imgUrl={person4}
                    text="Райт І.С., кандидат педагогічних наук,  науковий співробітник лабораторії естетичного виховання
                    та мистецької  освіти  Інституту  проблем виховання  Національної  академії  педагогічних  наук України"/>

            <Person imgUrl={person5}
                    text="Остапчук М. М., доцент кафедри  гри на  музичних інструментах Інституту  мистецтв  РДГУ"/>

            <Person imgUrl={person7} text="Заходякін О.В., доцент кафедри естрадної музики Інституту  мистецтв  РДГУ"/>

            <Person imgUrl={person8}
                    text='Вишневська І.П., викладач вищої категорії, голова циклової комісії "Фортепіано"
                    Рівненського музичного фахового коледжу РДГУ'/>

            <Person imgUrl={person3} text={`Іванова Л.І., викладач першої категорії КЗ "Луцька музична  школа 3"`}/>

            <Person imgUrl={person6}
                    text="Марцева Ж.П., старший викладач, завідуюча фортепіанним відділом Рівненської дитячої музичної школи №1 імені М. Лисенка"/>
        </PersonInfoSection>
    </Wrapper>);
}
