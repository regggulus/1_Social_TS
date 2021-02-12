import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export function MyPosts() {

    const posts = [
        {id: 1, message: "Hi, how are you", likesCount: "20"},
        {id: 2, message: "It's my first post", likesCount: "25k"}
    ]
    const postsElements = posts
        .map(p => <Post
                message={p.message}
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

