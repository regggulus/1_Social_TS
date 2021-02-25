import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/store";

type MyPostsPropsType = {
    posts: Array<PostType>
}

export function MyPosts(props: MyPostsPropsType) {

    const postsElements = props.posts
        .map(post => <Post
            posts={post} key={post.id}/>
        )
    let newPostElement: any = React.createRef()
    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
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

