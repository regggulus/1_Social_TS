import React from 'react';
import logo from './img/logoTel.png'
import Cover from './img/jellyfish1.jpg'
import './App.css';

function App() {
    return (
        <div className="App">
            <header className={'header'}>
                <img
                    src={logo}
                    alt="Logo"/>
            </header>
            <div className={'nav'}>
                <div>
                    <a href={''}>Profile</a>
                </div>
                <div>
                    <a href={''}>Messages</a>
                </div>
                <div>
                    <a href={''}>News</a>
                </div>
                <div>
                    <a href={''}>Music</a>
                </div>
                <div>
                    <a href={''}>Settings</a>
                </div>
            </div>
            <div className={'content'}>
                <div>
                    <img src={Cover}/>
                </div>
                <div> ava + description</div>
                <div>
                    My post
                    <div>
                        New Post
                    </div>
                    <div>
                        <div>post #1</div>
                        <div>post #2</div>
                        <div>post #3</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
