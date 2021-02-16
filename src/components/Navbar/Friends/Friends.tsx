import React from "react";
import s from './Friends.module.css';
import Avatar from '../../../img/avatar/vk-dog-1.jpg'

export function Friends() {
    return (
        <div className={s.friends}>
            {/*<div><img src={Avatar} alt="dog Friends"/></div>*/}
            <p><img src={Avatar} alt=""/></p>
        </div>
    )
}