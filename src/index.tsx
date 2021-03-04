import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import reportWebVitals from './reportWebVitals';
import state, {addPost, changeNewPostText, subsriber} from './redux/state';

export function rerenderEntireTree () {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} changeNewPostText={changeNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
reportWebVitals();
subsriber(rerenderEntireTree)
