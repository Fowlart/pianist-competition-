import React from "react";
import styled from "styled-components";
import {ResultsFilter} from "./ResultsFilter";
import {Card} from "./Card";
import {useSelector} from "react-redux";
import {RegularHeader} from "./RegularHeader";
import {InfoPage, InfoPage2} from "./InfoPage";
import logo from "../1163023.png";

const CommonWrapper = styled.div`
  background: url("${logo}") no-repeat center fixed;
  background-size: contain;
  border: 6px solid #333;
  margin: 20px;
`;

const MainSectionFlex = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MainSection = () => {

    const cards = useSelector(state => state.cards);
    const isDataInPlace = useSelector(state => state.isDataInPlace);
    const cardCount = useSelector(state => state.cardCount);
    const sectionsForFilter = [
        `Архівні відео`,
        `Номінація «Фортепіано соло»`,
        `Номінація «Фортепіанний ансамбль»`,
        `Номінація «Додатковий інструмент (фортепіано)»`,
        `Номінація «Концертмейстер»`,
        `Про конкурс`,
        "Рівненські фортепіаннні студії"];

    let infoPage = (cardCount===-1)?<InfoPage/>:<InfoPage2/>

    return (
        <>
            <RegularHeader cardCount={cardCount}/>
            <ResultsFilter sections={sectionsForFilter}/>
            {isDataInPlace ? (
                <CommonWrapper>
                <MainSectionFlex>
                    {cards.map(card => (
                        <Card
                            name={card.name}
                            videoUrl={card.videoUrl}
                            composition={card.composition}
                            key={card.id.$oid}/>
                    ))}</MainSectionFlex></CommonWrapper>) : infoPage}</>);
};
