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
import {RootStateType} from "./redux/state";


type AppPropsType = {
    state: RootStateType
    changeNewPostText: (newText: string) => void
    addPost: (postMessage: string) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar sidebarPage={props.state.sidebarPage}/>
                <div className={'app-content'}>
                    <Route path={'/profile'} render={ () =>
                        <Profile profilePage={props.state.profilePage}
                                 addPost={props.addPost}
                                 changeNewPostText={props.changeNewPostText}
                        />}/>
                    <Route path={'/dialogs'} render={ () =>
                        <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                    {/*<Route path={'/sidebar'} render={ () =>
                    <Navbar sidebarPage={props.store.sidebarPage}/>}/>*/}
                </div>

            </div>
        </BrowserRouter>);
}

export default App;
