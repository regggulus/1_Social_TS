import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from './components/Dialogs/Dialogs';
import {Music} from "./components/Music/Music";
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionsTypes, RootStateType, StoreType} from "./redux/state";


type AppPropsType = {
    state: RootStateType
    changeNewPostText: (newText: string) => void
    addPost: (addNewPost: string) => void
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

export const App: React.FC<AppPropsType> = (props) => {
    const state = (props.store.getState)
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar sidebarPage={props.state.sidebarPage}
                        // dispatch={props.dispatch}
                />
                <div className={'app-content'}>
                    <Route path={'/profile'} render={ () =>
                        <Profile profilePage={props.state.profilePage}
                                 dispatch={props.dispatch}
                                 addPost={props.addPost}
                                 changeNewPostText={props.changeNewPostText}
                        />}/>
                    <Route path={'/dialogs'} render={ () =>
                        <Dialogs dialogsPage={props.state.dialogsPage}
                                 dispatch={props.dispatch}
                        />}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                    {/*<Route path={'/sidebar'} render={ () =>
                    <Navbar sidebarPage={props.store.sidebarPage}/>}/>*/}
                </div>

            </div>
        </BrowserRouter>);
}