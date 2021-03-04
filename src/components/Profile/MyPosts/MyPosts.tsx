import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";

type MyPostsPropsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    changeNewPostText: (newText: string) => void
}

export function MyPosts(props: MyPostsPropsType) {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const postsElements = props.profilePage.posts
        .map(post => <Post
            post={post} key={post.id}/>
        )


    let addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current?.value)
            // props.changeNewPostText('')
        }
    }
    const onPostChange = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            props.changeNewPostText(text)
        }
    }
    return (
        <div className={s.myPost}>
            <h2>My post</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.profilePage.newPostText}>
                    </textarea>
                </div>
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

