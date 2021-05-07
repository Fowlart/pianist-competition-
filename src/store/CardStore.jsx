import {createStore} from 'redux'

const group1 = `Переможці номінації "Фортепіано соло"`;
const group2 = `Переможці номінації "Фортепіанний ансамбль"`;
const group3 = `Переможці номінації "Концертмейстер"`;

const myCards = [{
    id: "card-1",
    name: "Семіков А.С",
    composition: 'Тестова увертюра Бетховена "Качка жовта в озері тонула"',
    videoUrl: "https://drive.google.com/file/d/1Yj8s78Bjlhc63ngiqBprZiMPI74GhN0G/preview",
    group: group1
},
    {
        id: "card-2",
        name: "Буцяк З.І",
        composition: 'Тестова увертюра Бетховена "Качка жовта в озері тонула"',
        videoUrl: "https://drive.google.com/file/d/1Yj8s78Bjlhc63ngiqBprZiMPI74GhN0G/preview",
        group: group2
    },
    {
        id: "card-3",
        name: "Іванова Т.Л",
        composition: "Тестова увертюра Бетховена 'Качка жовта в озері тонула'",
        videoUrl: "https://drive.google.com/file/d/1Yj8s78Bjlhc63ngiqBprZiMPI74GhN0G/preview",
        group: group3
    },
    {
        id: "card-4",
        name: "Кузіна Т.Л",
        composition: "Тестова увертюра Бетховена 'Качка жовта в озері тонула'",
        videoUrl: "https://drive.google.com/file/d/1Yj8s78Bjlhc63ngiqBprZiMPI74GhN0G/preview",
        group: group3
    }];

function filmReducer(state = {cardCount: myCards.length, cards: myCards, isDataInPlace: true, error:""}, action) {
    switch (action.type) {
        case 'INFO_PAGE':
            return {
                cardCount: -1,
                cards: [],
                isDataInPlace: false,
                error: ""
            };
        case 'ALL':
            console.log("> Усі відео");
            return {
                cards: myCards,
                isDataInPlace: true,
                cardCount: myCards.length,
                error: ""
            };
        case 'group-1':
            console.log(`> Переможці номінації "Фортепіано соло"`);
            let newCards = myCards.filter(card => card.group === group1).slice();
            return {
                cards: newCards,
                isDataInPlace: true,
                cardCount: newCards.length,
                error: ""
            }
        case 'group-2':
            console.log(`> Переможці номінації "Фортепіанний ансамбль"`);
            let newCards1 =  myCards.filter(card => card.group === group2).slice();
            return {
                cards: newCards1,
                isDataInPlace: true,
                cardCount: newCards1.length,
                error: ""
            }
        case 'group-3':
            console.log(`> Переможці номінації "Концертмейстер"`);
            let newCards2 = myCards.filter(card => card.group === group3).slice();
            return {
                cards: newCards2,
                isDataInPlace: true,
                cardCount: newCards2.length,
                error: "",
            }
        case 'SEARCH':
            console.log(`> Пошук`);
            let newCards3 = myCards.filter(card => card.name.toLowerCase().startsWith(action.query.toLowerCase())).slice();
            return {
                cards: newCards3,
                isDataInPlace: true,
                cardCount: newCards3.length,
                error: ""
            }
        case 'ERROR':
            console.log(`> Помилка`);
            return {
               ...state,
                error:action.msg
            }
        default:
            return {
                cards: myCards,
                isDataInPlace: true,
                cardCount: myCards.length,
                error:""
            }
    }
}

export const cardStore = createStore(filmReducer);

cardStore.subscribe(() =>
    console.log("FilmsStore state was changed, number of cards: " + cardStore.getState().cardCount)
);





