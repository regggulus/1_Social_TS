import React from 'react';
import Logo from '../img/Logo/logoTel.png'
import s from './Header.module.css'

export function Header() {
    return (
        <div className={s.header}>
            <img src={Logo} alt="Logo"/>
        </div>
    )
}

