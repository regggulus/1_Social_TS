import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (addNewPost: string) => void
    changeNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void

}

export function Profile(props: ProfilePropsType) {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                addPost={props.addPost}
                dispatch={props.dispatch}
                changeNewPostText={props.changeNewPostText}
                newPostText={props.profilePage.newPostText}
            />
        </div>
    )
}

