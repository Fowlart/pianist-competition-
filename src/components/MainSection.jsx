import React from "react";
import styled from "styled-components";
import {ResultsFilter} from "./ResultsFilter";
import {Card} from "./Card";
import {useSelector} from "react-redux";
import {RegularHeader} from "./RegularHeader";
import {InfoPage} from "./InfoPage";
import logo from "../1163023.png";

const CommonWrapper = styled.div`
  background-image: url("${logo}");
  min-height: 1000px;
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
    const sectionsForFilter = [`Номінація "Фортепіано соло"`, `Номінація "Фортепіанний ансамбль"`, `Номінація "Концертмейстер"`,`Усі відео`,`Про конкурс`];

    return (
        <CommonWrapper>
            <RegularHeader cardCount={cardCount}/>
            <ResultsFilter sections={sectionsForFilter}/>
            {isDataInPlace ? (
                <MainSectionFlex>
                    {cards.map(card => (
                        <Card
                            name={card.name}
                            videoUrl={card.videoUrl}
                            composition={card.composition}
                            key={card.id.$oid}/>
                    ))}</MainSectionFlex>) : (<InfoPage/>)}</CommonWrapper>);
};
