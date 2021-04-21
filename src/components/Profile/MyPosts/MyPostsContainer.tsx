import React from "react";
import {ActionsTypes, PostType, StoreType} from "../../../redux/state";
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
    const state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostAC(props.newPostText))
    }
    const onPostChange = (text: string) => {
        props.store.dispatch(changeNewPostTextAC(text))
    }
    return (
        <MyPosts
            changeNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            dispatch={props.dispatch}
        />
    )
}

