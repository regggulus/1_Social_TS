import React from "react";
import Avatar from '../../../../img/avatar/StickerExample.jpg';
import s from './Post.module.css'
import {PostType} from "../../../../redux/store";

type PostPropsType = {
    post: Array<PostType>
}

export function Post(props: PostPropsType) {
    return (
        <div className={s.item}>
            <div>
                {props.post.map(l => {
                    return (
                        <div key={l.id}>
                            <img src={Avatar} alt="avatar"/>
                            {l.message}
                            <div>
                                <span>like {l.likesCount}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
