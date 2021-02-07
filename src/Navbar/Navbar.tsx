import React from "react";
import s from './Navbar.module.css'

export function Navbar() {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <a>Profile</a>
            </div>
            <div className={`${s.item} + ${s.active}`}>
                <a >Messages</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a >Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </div>
    )
}

