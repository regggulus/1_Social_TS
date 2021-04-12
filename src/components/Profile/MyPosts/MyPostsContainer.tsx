import React from "react";
// import s from './MyPosts.module.css'
import {ActionsTypes, PostType, StoreType} from "../../../redux/state";
// import {Post} from "./Post/Post";
import {addPostAC, changeNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type MyPostsPropsType = {
    store: StoreType
    posts: Array<PostType>
    addPost: (addNewPost: string) => void
    changeNewPostText: (newText: string) => void
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}


export function MyPostsContainer(props: MyPostsPropsType) {

    // const newPostElement = React.createRef<HTMLTextAreaElement>()
    const state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostAC(props.newPostText))
        /*if (newPostElement.current) {
            props.store.dispatch(addPostAC(props.newPostText))
            props.changeNewPostText('')
        }*/
    }
    const onPostChange = (text: string) => {
        props.store.dispatch(changeNewPostTextAC(text))
        /*if (newPostElement.current) {
            const text = newPostElement.current.value
            props.store.dispatch(changeNewPostTextAC(text))
        }*/
    }
    return (
        /*<div className={s.myPost}>
            <h2>My post</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}
                              placeholder={'Enter your message'}
                    >
                    </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post posts={props.posts}/>
            </div>
        </div>*/
        <MyPosts
            changeNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            dispatch={props.dispatch}
        />
    )
}

