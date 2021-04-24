import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import {App} from "./App";

import {Provider} from "react-redux";
import {store} from "./redux/redux-store";

export function rerender() {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App state={store.getState()}
                    /*store={store}
                     state={store.getState()}
                     addPost={store._addPost.bind(store)}
                     changeNewPostText={store._changeNewPostText.bind(store)}
                     changeNewMessageText={store._changeNewMessageText.bind(store)}
                     newSendMessage={store._newSendMessage.bind(store)}
                     dispatch={store.dispatch.bind(store)}*/
                />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerender()
//store.subscriber(rerender)
reportWebVitals();
