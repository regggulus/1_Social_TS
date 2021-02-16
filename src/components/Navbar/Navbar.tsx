import React from "react";
import { NavLink } from "react-router-dom";
import { Friends } from "./Friends/Friends";
import s from './Navbar.module.css'
import Avatar from '../../img/avatar/vk-dog-1.jpg'

export function Navbar() {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news'  activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </div>
            <p><div className={s.item}>
                <NavLink to='/sidebar' activeClassName={s.active}>Friends
                    <Friends/>
                </NavLink>
            </div></p>
        </div>
    )
}

