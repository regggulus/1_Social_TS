import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'
import {SidebarPageType} from "../../redux/state";
import {Sidebar} from "../Sidebar/Sidebar";

type NavbarPropsType = {
    // sidebarPage: SidebarPageType
}

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
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </div>

            <div className={s.item}>
                <p>
                    <NavLink to='/sidebar'
                             activeClassName={s.active}>
                        Friends</NavLink>
                </p>
            </div>

            {/*<div className={s.itemSide}>
                {props.sidebarPage.sidebar.map
                (s => <Sidebar name={s.name} id={s.id}/>)}
            </div>*/}


        </div>
    )
}

