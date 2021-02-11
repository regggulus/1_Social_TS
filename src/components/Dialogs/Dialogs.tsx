import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'

export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1" activeClassName={s.active}>Mason</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2" activeClassName={s.active}>Edgar</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3" activeClassName={s.active}>Felix</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4" activeClassName={s.active}>Jack</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5" activeClassName={s.active}>Calvin</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Of course!</div>
                <div className={s.message}>A lot of my staff..</div>
                <div className={s.message}>Oke, we`ll see</div>
                <div className={s.message}>Dont`s know</div>
                <div className={s.message}>What`s up?</div>
            </div>
        </div>
    )
}