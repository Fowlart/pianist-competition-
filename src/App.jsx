import React from 'react';
import ErrorBoundaryMainSection from './screens/MainSection/MainSection';
import {Provider} from "react-redux";
import {cardStore} from "./store/CardStore";
import {RegularHeader} from "./components/HeadersComponents/RegularHeader";

function App() {
    return (
        <React.StrictMode>
            <Provider store={cardStore}>
                <RegularHeader/>
                <ErrorBoundaryMainSection/>
            </Provider>
        </React.StrictMode>
    );
}

export default App;
