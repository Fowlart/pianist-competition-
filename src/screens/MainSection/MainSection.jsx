import React, {useEffect} from "react";
import styled from "styled-components";
import {ResultsFilter} from "../../components/MainSectionComponents/ResultsFilter";
import {Card} from "../../components/MainSectionComponents/Card";
import {useDispatch, useSelector} from "react-redux";

const MainSectionFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: bisque;
`;


export const MainSection = () => {

    //example: the way to retrieve data from redux store
    const cards = useSelector(state => state.cards);

    //example: the way to get dispatcher for redux
    let sectionsForFilter = [`Усі відео`, `Переможці номінації "Фортепіано соло"`, `Переможці номінації "Фортепіанний ансамбль"`, `Переможці номінації "Концертмейстер"`];

    return (
        <>
            <ResultsFilter sections={sectionsForFilter}/>
            <MainSectionFlex>
                {cards.map(card => (
                    <Card
                        name={card.name}
                        videoUrl={card.videoUrl}
                        composition={card.composition}
                        key={card.id}/>
                ))}
            </MainSectionFlex>
        </>
    );
};
