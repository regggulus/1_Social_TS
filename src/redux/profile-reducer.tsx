import {ActionsTypes, ProfilePageType} from "./state";

export const addPostAC = (addNewPost: string) =>
    ({type: "ADD-POST", addNewPost: addNewPost}) as const
export const changeNewPostTextAC = (newText: string) =>
    ({type: 'CHANGE-NEW-POST-TEXT', newText: newText}) as const



export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    if (action.type === 'ADD-POST') {
        let newPost = {
            id: 5,
            message: action.addNewPost,
            likesCount: 0
        }
        let copyState = {...state}
        copyState.posts.push(newPost)
        copyState.newPostText = ''
         return copyState
    } else if (action.type === 'CHANGE-NEW-POST-TEXT') {
        let copyState = {...state}
        copyState.newPostText = action.newText
        return state
    }

}