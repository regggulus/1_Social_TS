import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from './components/Dialogs/Dialogs';
import {Music} from "./components/Music/Music";
import { News } from './components/News/News';
import { Settings } from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';
import {store, RootStateType} from './redux/store'

type AppPropsType = {
    store: RootStateType
    // addPost: () => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className={'app-content'}>
                    <Route path={'/profile'} render={ () =>
                        <Profile profilePage={props.store.profilePage}/>}/>
                    <Route path={'/dialogs'} render={ () =>
                        <Dialogs dialogsPage={props.store.dialogsPage}/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>

            </div>
        </BrowserRouter>);
}

export default App;
