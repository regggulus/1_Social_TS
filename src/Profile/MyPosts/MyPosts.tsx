import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export function MyPosts() {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={'Hi, how are you'} likesCount={15}/>
                <Post message={"It's my first post"} likesCount={25}/>
            </div>
        </div>
    )
}

