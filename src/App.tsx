import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Music} from "./components/Music/Music";
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionsTypes, RootStateType, StoreType} from "./redux/state";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Users} from "./components/Users/Users";


/*type AppPropsType = {
    state: RootStateType
}*/
// : React.FC<AppPropsType>
export const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar
                    // sidebarPage={props.state.sidebarPage}
                />
                <div className={'app-content'}>
                    <Route path={'/profile'} render={() =>
                        <Profile
                        />}/>
                    <Route path={'/dialogs'} render={() =>
                        <DialogsContainer/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/users'} component={Users}/>
                    <Route path={'/settings'} component={Settings}/>

                </div>

            </div>
        </BrowserRouter>);
}