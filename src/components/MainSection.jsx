import React, {useEffect} from "react";
import styled from "styled-components";
import {ResultsFilter} from "./ResultsFilter";
import {Card} from "./Card";
import {useDispatch, useSelector} from "react-redux";

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

    //example: the way to retrieve data from redux store
    const cards = useSelector(state => state.cards);
    const isDataInPlace =  useSelector(state => state.isDataInPlace);
    let sectionsForFilter = [`Про конкурс`,`Усі відео`, `Переможці номінації "Фортепіано соло"`, `Переможці номінації "Фортепіанний ансамбль"`, `Переможці номінації "Концертмейстер"`];

    return (
        <>
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
