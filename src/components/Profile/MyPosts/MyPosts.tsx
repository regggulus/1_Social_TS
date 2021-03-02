import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/store";

type MyPostsPropsType = {
    post: Array<PostType>
    addPost: (postMessage: string) => void
}

export function MyPosts(props: MyPostsPropsType) {

    const postsElements = props.post
        .map(post => <Post
            post={post} key={post.id}/>
        )
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current?.value)
        }
    }
    return (
        <div className={s.myPost}>
            <h2>My post</h2>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

