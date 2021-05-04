import React from 'react';
import {Header} from './components/HeadersComponents/Header';
import ErrorBoundaryMainSection from './screens/MainSection/MainSection';
import {Provider} from "react-redux";
import {cardStore} from "./store/CardStore";
import {createServer} from "miragejs";

//Example: fake API
createServer({
    routes() {
        this.get("/api/films", () => [
            {
                id: "card-1",
                name: "Артур Семіков",
                composition: 'Тестова увертюра Бетховена "Качка жовта в озері тонула"',
                videoUrl: "https://drive.google.com/file/d/1ZS9fdW8I1lxX9lHHEXPobc576x_XShTX/preview"
            },
            {
                id: "card-2",
                name: "Артур Семіков",
                composition: 'Тестова увертюра Бетховена "Качка жовта в озері тонула"',
                videoUrl: "https://drive.google.com/file/d/1ZS9fdW8I1lxX9lHHEXPobc576x_XShTX/preview"
            },
            {
                id: "card-3",
                name: "Артур Семіков",
                composition: "Тестова увертюра Бетховена 'Качка жовта в озері тонула'",
                videoUrl: "https://drive.google.com/file/d/1ZS9fdW8I1lxX9lHHEXPobc576x_XShTX/preview"
            }
        ])
    },
})

function App() {
    return (
        <React.StrictMode>
            <Provider store={cardStore}>
                <Header/>
                <ErrorBoundaryMainSection/>
            </Provider>
        </React.StrictMode>
    );
}

export default App;
