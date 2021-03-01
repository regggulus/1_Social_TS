import React from "react";
import Avatar from '../../../../img/avatar/StickerExample.jpg';
import s from './Post.module.css'
import {PostType} from "../../../../redux/store";

type PostPropsType = {
    post: PostType
}

export const Post: React.FC<PostPropsType> = ({post}) => {
    return (
        <div className={s.item}>
            <div>
                {/*{posts}*/}
                <div>
                    <img src={Avatar} alt="avatar"/>
                    {post.message}
                    <div>
                        <span>like {post.likesCount}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
