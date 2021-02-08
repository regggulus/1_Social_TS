import React from "react";
import Avatar from '../../../../img/avatar/StickerExample.jpg';
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likesCount: string
}
export function Post(props: PostPropsType) {
    return (
        <div className={s.item}>
            <img src={Avatar} alt="avatar"/>
            {props.message}

            <div>like {props.likesCount}</div>
        </div>
    )
}

