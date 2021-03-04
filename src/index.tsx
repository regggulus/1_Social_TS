import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/state";
import {App} from "./App";

export function rerenderEntireTree () {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}
                 state={store._state}
                 addPost={store.addPost}
                 changeNewPostText={store.changeNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subsriber(rerenderEntireTree)
rerenderEntireTree()
reportWebVitals();
