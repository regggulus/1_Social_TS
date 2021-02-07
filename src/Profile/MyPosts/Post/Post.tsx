import React from "react";
import Avatar from '../../../img/avatar/StickerExample.jpg';
import s from './Post.module.css'

export function Post() {
    return (
            <div className={s.item}>
                <img src={Avatar} alt="avatar"/>
                <div>post</div>
                <div>like</div>
            </div>
    )
}

