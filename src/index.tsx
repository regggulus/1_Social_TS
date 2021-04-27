import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import {App} from "./App";
import {Provider} from "react-redux";
import {store} from "./redux/redux-store";

// export function rerender() {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
// }

// rerender()
// store.subscriber(rerender)
reportWebVitals();
