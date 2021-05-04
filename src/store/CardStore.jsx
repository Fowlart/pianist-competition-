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

const cards = [{
        id: "card-1",
        name: "Артур Семіков",
        composition: 'Тестова увертюра Бетховена "Качка жовта в озері тонула"',
        videoUrl: ""
    },
    {
        id: "card-2",
        name: "Оленка Семікова",
        composition: 'Тестова увертюра Бетховена "Качка жовта в озері тонула"',
        videoUrl: ""
    },
    {
        id: "card-3",
        name: "Артур Семіков",
        composition: "Тестова увертюра Бетховена 'Качка жовта в озері тонула'",
        videoUrl: ""
    }];

function filmReducer(state = {cardCount: cards.length, cards: cards,isDataInPlace: true}, action) {
    switch (action.type) {
        case 'ADD_INITIAL_DATA':
            return {
                ...state,
                cardCount: action.payload.length,
                cards: action.payload,
                isDataInPlace: action.isDataInPlace
            }
        case 'All':
            return {
                ...state
            }
        default:
            return state
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





