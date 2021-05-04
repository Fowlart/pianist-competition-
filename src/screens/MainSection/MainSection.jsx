import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import {ResultsFilter} from "../../components/MainSectionComponents/ResultsFilter";
import {Card} from "../../components/MainSectionComponents/Card";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies} from "../../api_client/apiClient";

const MainSectionFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: bisque;
`;


const fetchFilms = fetchMovies();

const MainSection = () => {

    //example: the way to retrieve data from redux store
    const films = useSelector(state => state.films);

    //example: the way to get dispatcher for redux
    const dispatch = useDispatch()
    let sectionsForFilter = ['Усі відео','Переможці номінації "Фортепіано соло"', 'Переможці номінації "Фортепіанний ансамбль"', 'Переможці номінації "Концертмейстер"'];

    function deleteCard(cardId) {
        dispatch({type: "REMOVE_FILM", filmId: cardId});
    }

    return (
        <>
            <ResultsFilter sections={sectionsForFilter}/>
            <MainSectionFlex>

                {films.map(card => (
                    <Card deleteCardHandler={deleteCard}
                          name={card.name}
                          videoUrl={card.videoUrl}
                          composition={card.composition}
                          key={card.id}/>
                ))}

            </MainSectionFlex>
        </>
    );
};

const OopsDiv = styled.div`
  background-color: black;
  color: red;
  text-align: center;`;


const OopsText = () => {
    return (
        <OopsDiv>
            < h2> Oops, something went wrong ... We are doing our best to fix the issue ! < /h2>
        </OopsDiv>
    );
};

const ErrorBoundaryMainSection = () => {
    const dispatch = useDispatch();
    const isDataInPlace = useSelector(state => state.isDataInPlace);

    useEffect(() => {
        dispatch(fetchFilms);
    },[]);

    return isDataInPlace ?
        <MainSection/> : <OopsText/>;
};

export default ErrorBoundaryMainSection;
