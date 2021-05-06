import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Music} from "./components/Music/Music";
import {News} from './components/News/News';
import {Friends} from "./components/Navbar/friends/Friends";
import {Settings} from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";


export const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className={'app-content'}>
                    <Route path={'/profile'} render={() => <Profile/>}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer />}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/users'} render={()=> <UsersContainer setTotalUsersCount={() => ('')}/>}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/friends'} component={Friends}/>

                </div>

            </div>
        </BrowserRouter>);
}