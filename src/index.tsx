import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/state";
import {App} from "./App";

export function rerender() {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}
                 state={store._state}
                 addPost={store._addPost.bind(store)}
                 changeNewPostText={store._changeNewPostText.bind(store)}
                 changeNewMessageText={store._changeNewMessageText.bind(store)}
                 newSendMessage={store._newSendMessage.bind(store)}
                 dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscriber(rerender)
rerender()
reportWebVitals();
