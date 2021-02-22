import React from "react";
import s from './Sidebar.module.css';
import Avatar from '../../img/avatar/vk-dog-1.jpg'
import {SidebarType} from "../../redux/store";



type SidebarPropsType = {
    // sidebar: Array<SidebarType>
    id: number
    name: string
}
export function Sidebar(props: SidebarPropsType) {


    return (
        <div className={s.sidebar}>
            {props.name}
            <img src={Avatar} alt="dog Friends"/>
            {/*<img src={Avatar} alt=""/>*/}
        </div>
    )
}