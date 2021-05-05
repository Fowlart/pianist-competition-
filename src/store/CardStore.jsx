import {createStore} from 'redux'

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object.  It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */

const group1 = `Переможці номінації "Фортепіано соло"`;
const group2 = `Переможці номінації "Фортепіанний ансамбль"`;
const group3 = `Переможці номінації "Концертмейстер"`;


const myCards = [{
    id: "card-1",
    name: "Артур Семіков",
    composition: 'Тестова увертюра Бетховена "Качка жовта в озері тонула"',
    videoUrl: "https://drive.google.com/file/d/1Yj8s78Bjlhc63ngiqBprZiMPI74GhN0G/preview",
    group: group1
},
    {
        id: "card-2",
        name: "Оленка Семікова",
        composition: 'Тестова увертюра Бетховена "Качка жовта в озері тонула"',
        videoUrl: "https://drive.google.com/file/d/1Yj8s78Bjlhc63ngiqBprZiMPI74GhN0G/preview",
        group: group2
    },
    {
        id: "card-3",
        name: "Артур Семіков",
        composition: "Тестова увертюра Бетховена 'Качка жовта в озері тонула'",
        videoUrl: "https://drive.google.com/file/d/1Yj8s78Bjlhc63ngiqBprZiMPI74GhN0G/preview",
        group: group3
    }];

function filmReducer(state = {cardCount: myCards.length, cards: myCards, isDataInPlace: true}, action) {
    switch (action.type) {
        case 'INFO_PAGE':
            return {
                ...state,
                cardCount: 0,
                cards: [],
                isDataInPlace: false
            };
        case 'ALL':
            console.log("> Усі відео");
            return {
                ...state,
                cards: myCards,
                isDataInPlace: true,
                cardCount: myCards.length
            };
        case 'group-1':
            console.log(`> Переможці номінації "Фортепіано соло"`);
            return {
                ...state,
                cards: myCards.filter(card => card.group === group1).slice(),
                isDataInPlace: true,
                cardCount: myCards.length
            }
        case 'group-2':
            console.log(`> Переможці номінації "Фортепіанний ансамбль"`);
            return {
                ...state,
                cards: myCards.filter(card => card.group === group2).slice(),
                isDataInPlace: true,
                cardCount: myCards.length
            }
        case 'group-3':
            console.log(`> Переможці номінації "Концертмейстер"`);
            return {
                ...state,
                cards: myCards.filter(card => card.group === group3).slice(),
                isDataInPlace: true,
                cardCount: myCards.length
            }
        default:
            return {
                ...state,
                cards: myCards,
                isDataInPlace: true,
                cardCount: myCards.length
            }
    }
}


// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export const cardStore = createStore(filmReducer);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.
cardStore.subscribe(() =>
    console.log("FilmsStore state was changed, number of cards: " + cardStore.getState().cardCount)
);





