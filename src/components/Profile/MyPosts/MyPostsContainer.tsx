import React from "react";
// import {ActionsTypes, RootStateType, StoreType} from "../../../redux/state";
import {addPostAC, changeNewPostTextAC, PostType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootStateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    posts: Array<PostType>,
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
    changeNewPostText: (text: string) => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        },
        changeNewPostText: (text: string) => {
            dispatch(changeNewPostTextAC(text))
        }
    }
}
export const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(MyPosts)

