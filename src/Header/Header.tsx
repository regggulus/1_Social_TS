import React from 'react';
import Logo from '../img/Logo/logoTel.png'
import './Header.css'

export function Header() {
    return (
        <div className={'header'}>
            <img src={Logo} alt="Logo"/>
        </div>
    )
}

