import React from "react";
import s from './Profile.module.css'
// import {MyPosts} from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType, StoreType} from "../../redux/state";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: StoreType
    profilePage: ProfilePageType
    addPost: (addNewPost: string) => void
    changeNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void

}

export function Profile(props: ProfilePropsType) {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
                posts={props.profilePage.posts}
                addPost={props.addPost}
                dispatch={props.dispatch}
                changeNewPostText={props.changeNewPostText}
                newPostText={props.profilePage.newPostText}
            />
        </div>
    )
}

