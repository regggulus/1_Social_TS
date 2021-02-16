import React from "react";
import s from './Sidebar.module.css';
import {Friends} from "../Navbar/Friends/Friends";

export function Sidebar() {
    return (
        <div className={s.sidebar}>
           <Friends/>
        </div>
    )
}