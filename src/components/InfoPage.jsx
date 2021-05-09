import styled from "styled-components";
import React from "react";
import {BiLinkExternal} from "react-icons/all";
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
      justify-content: center;
    `;

    const TextSection = styled.div`
      color: white;
      margin-left: 10px;
      font-family: "Segoe UI", serif;
      font-weight: 600;
      text-align: left;
      font-size: 17px;
    `;

    const Image = styled.img`
      margin-right: 20%;
      margin-top: 5px;
      margin-left: 20%;
      border: solid white 2px;
    `;


    return (<Container><TextSection><br/><br/><br/>{props.text}</TextSection><Image src={props.imgUrl}/></Container>);

}

const Div = styled.div`
  text-align: left;
`;

const A = styled.a`
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


export const InfoPage = () => {
    return (<Wrapper><Div>
        <br/>
        <br/>
        <A href="https://drive.google.com/file/d/1qdyL0mXafowI888sPJLyM7yuhYJNR70b/view?usp=sharing"><BiLinkExternal/>
            Склад організаційного комітету </A>
        <br/>
        <A href="https://drive.google.com/file/d/1ka7GuVc0mhHzR5jq1qhTCHnlNa0HcXmB/view?usp=sharing"><BiLinkExternal/>Положення</A>
        <br/>
        <A href="https://drive.google.com/file/d/16sz0uu564Bl7l9Y-bqMO_-gLPqTuDBYC/view?usp=sharing"><BiLinkExternal/>Афіша</A>
    </Div>
        <PersonInfoSection>
            <Person imgUrl={person1} text="Закопець Л.С.- голова журі, заслужений  діяч мистецтв України, викладач-методист Львівського державного музичного ліцею імені С. Крушельницької, почесний амбасадор музичної  культури  Польщі"/>
            <Person imgUrl={person2} text={`Кузнєцова О.О.- голова журі, доктор філософії, кандидат педагогічних наук, професор кафедри  музично- інструментального виконавства Харківського Національного педагогічного університету імені Г.Сковороди, заслужений діяч мистецтв України,  "Відмінник освіти України", відзначена орденом Міністерства культури  України "За досягнення в розвитку  культури  і мистецтв ", секретар Національної всеукраїнської музичної спілки, голова Асоціації піаністів  Національної  всеукраїнської музичної спілки,  президент Асоціації піаністів-педагогів України("EPTA" Ukraine), Віце- президент  Асоціації піаністів-педагогів Європи "EPTA" London).`}/>
            <Person imgUrl={person3} text="Іванова Л.І., викладач першої категорії КЗ 'Луцька музична  школа 3'."/>
            <Person imgUrl={person4} text="Райт І.С., кандидат педагогічних наук,  науковий співробітник лабораторії естетичного виховання та мистецької  освіти  Інституту  проблем виховання  Національної  академії  педагогічних  наук України."/>
            <Person imgUrl={person6} text="Марцева Ж.П., старший викладач, завідуюча фортепіанним відділом Рівненської дитячої музичної школи №1 імені М. Лисенка."/>
            <Person imgUrl={person5} text="Остапчук М. М., доцент кафедри  гри на  музичних інструментах Інституту  мистецтв  РДГУ."/>
            <Person imgUrl={person7} text="Заходякін О.В., доцент кафедри естрадної музики Інституту  мистецтв  РДГУ."/>
            <Person imgUrl={person8} text='Вишневська І.П., викладач вищої  категорії, голова циклової комісії ,,Фортепіано" Рівненського музичного училища РДГУ.'/>
        </PersonInfoSection>
    </Wrapper>);
}
