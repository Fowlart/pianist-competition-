import React from "react";
import styled from "styled-components";
import {ResultsFilter} from "./ResultsFilter";
import {Card} from "./Card";
import {useSelector} from "react-redux";
import {RegularHeader} from "./RegularHeader";
import {InfoPage} from "./InfoPage";

const MainSectionFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: bisque;
`;

export const MainSection = () => {

    const cards = useSelector(state => state.cards);
    const isDataInPlace = useSelector(state => state.isDataInPlace);
    const cardCount = useSelector(state => state.cardCount);
    const sectionsForFilter = [`Номінація "Фортепіано соло"`, `Номінація "Фортепіанний ансамбль"`, `Номінація "Концертмейстер"`,`Усі відео`,`Про конкурс`];

    return (
        <>
            <RegularHeader cardCount={cardCount}/>
            <ResultsFilter sections={sectionsForFilter}/>
            {isDataInPlace ? (
                <MainSectionFlex>
                    {cards.map(card => (
                        <Card
                            name={card.name}
                            videoUrl={card.videoUrl}
                            composition={card.composition}
                            key={card.id}/>
                    ))}</MainSectionFlex>) : (<InfoPage/>)}</>);
};
