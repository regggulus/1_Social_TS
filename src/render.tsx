import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType, store} from './redux/store';

export const rerenderEntireTree = (store: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
