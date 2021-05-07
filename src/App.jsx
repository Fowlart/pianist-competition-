import React from 'react';
import {MainSection} from './components/MainSection';
import {Provider} from "react-redux";
import {cardStore} from "./store/CardStore";
import {RegularHeader} from "./components/RegularHeader";

function App() {

    return (
        <React.StrictMode>
            <Provider store={cardStore}>
                <MainSection/>
            </Provider>
        </React.StrictMode>
    );
}

export default App;
