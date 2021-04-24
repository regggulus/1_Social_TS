import React from "react";
import Avatar from '../../../../img/avatar/StickerExample.jpg';
import s from './Post.module.css'
import {PostType} from "../../../../redux/profile-reducer";

type PostPropsType = {
    posts: Array<PostType>
}

export function Post(props: PostPropsType){
    return (
        <div className={s.item}>
            <div>
                {props.posts.map(p => {
                    return (
                        <div key={p.id}>
                            <img src={Avatar} alt="avatar"/>
                            {p.message}
                            <div>
                                <span>like {p.likesCount}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
