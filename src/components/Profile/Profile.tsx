import React from "react";
import Cover from '../../img/cover/jellyfish1.jpg';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export function Profile() {
    return (
        <div className={s.profile}>
            <div>
                <img src={Cover}/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

