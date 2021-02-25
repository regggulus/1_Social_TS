import React from "react";
import s from './Sidebar.module.css';
import Avatar from '../../img/avatar/vk-dog-1.jpg'


type SidebarPropsType = {
    id: number
    name: string
}

export function Sidebar(props: SidebarPropsType) {
    return (
        <div className={s.sidebar}>
            <img src={Avatar} alt="dog Friends"/>
            {props.name}
        </div>
    )
}