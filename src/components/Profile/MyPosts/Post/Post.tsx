import React from "react";
import Avatar from '../../../../img/avatar/StickerExample.jpg';
import s from './Post.module.css'
import {PostType} from "../../../../redux/store";

type PostPropsType = {
    posts: PostType
}

export const Post: React.FC<PostPropsType> = ({posts}) => {
    return (
        <div className={s.item}>
            <div>
                {/*{posts}*/}
                <div>
                    <img src={Avatar} alt="avatar"/>
                    {posts.message}
                    <div>
                        <span>like {posts.likesCount}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
