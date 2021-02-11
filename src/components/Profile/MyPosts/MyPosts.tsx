import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export function MyPosts() {
    return (
        <div className={s.myPost}>
            <h2>My post</h2>
            <div>
                <div><textarea></textarea></div>
               <div> <button>Add post</button></div>
            </div>
            <div className={s.posts}>
                <Post message={'Hi, how are you'} likesCount={'15'}/>
                <Post message={"It's my first post"} likesCount={'25k'}/>
            </div>
        </div>
    )
}

