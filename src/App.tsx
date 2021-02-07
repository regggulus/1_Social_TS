import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Navbar} from "./Navbar";
import {Profile} from "./Profile";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;
