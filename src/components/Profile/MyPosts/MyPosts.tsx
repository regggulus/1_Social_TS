import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export function MyPosts() {

    const PostData = [
        {id: 1, message: "Hi, how are you", likesCount: "20"},
        {id: 2, message: "It's my first post", likesCount: "25k"}
    ]

    return (
        <div className={s.myPost}>
            <h2>My post</h2>
            <div>
                <div><textarea></textarea></div>
               <div> <button>Add post</button></div>
            </div>
            <div className={s.posts}>
                <Post message={PostData[0].message} likesCount={PostData[0].likesCount}/>
                <Post message={PostData[1].message} likesCount={PostData[1].likesCount}/>
            </div>
        </div>
    )
}

