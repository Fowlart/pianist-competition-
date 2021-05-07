import React, {useEffect} from "react";
import styled from "styled-components";
import {ResultsFilter} from "./ResultsFilter";
import {Card} from "./Card";
import {useSelector} from "react-redux";
import {RegularHeader} from "./RegularHeader";

const MainSectionFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: bisque;
`;

const P = styled.p`
    color: red;
`;


export const MainSection = () => {

    const cards = useSelector(state => state.cards);
    const isDataInPlace = useSelector(state => state.isDataInPlace);
    const cardCount = useSelector(state => state.cardCount);
    const sectionsForFilter = [`Про конкурс`,`Усі відео`, `Номінація "Фортепіано соло"`, `Номінація "Фортепіанний ансамбль"`, `Номінація "Концертмейстер"`];

    return (
        <>
            <RegularHeader cardCount={cardCount}/>
            <ResultsFilter sections={sectionsForFilter}/>
            { isDataInPlace?(
            <MainSectionFlex>
                {cards.map(card => (
                    <Card
                        name={card.name}
                        videoUrl={card.videoUrl}
                        composition={card.composition}
                        key={card.id}/>
                ))}</MainSectionFlex>):<P>Тут має бути інфо-сторінка</P>}
        </>
    );
};
