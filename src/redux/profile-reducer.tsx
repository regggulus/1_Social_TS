import {ActionsTypes, ProfilePageType} from "./state";

export const addPostAC = (addNewPost: string) =>
    ({type: "ADD-POST", addNewPost: addNewPost}) as const
export const changeNewPostTextAC = (newText: string) =>
    ({type: 'CHANGE-NEW-POST-TEXT', newText: newText}) as const



export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    if (action.type === 'ADD-POST') {
        state._addPost(action.addNewPost)
    } else if (action.type === 'CHANGE-NEW-POST-TEXT') {
        state._changeNewPostText(action.newText)
    }
    return state
}