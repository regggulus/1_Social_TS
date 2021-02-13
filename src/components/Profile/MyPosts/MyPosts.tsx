import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType, ProfilePageType} from "../../../redux/store";

type MyPostsPropsType = {
    posts: Array<PostType>
}

export function MyPosts(props: MyPostsPropsType) {


    const postsElements = props.posts
        .map(p => <Post
                message={props.posts}
                likesCount={p.likesCount}
            />
        )
    return (
        <div className={s.myPost}>
            <h2>My post</h2>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

