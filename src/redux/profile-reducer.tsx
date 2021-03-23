import {ActionsTypes, ProfilePageType} from "./state";

export const addPostAC = (addNewPost: string) =>
    ({type: "ADD-POST", addNewPost: addNewPost}) as const
export const changeNewPostTextAC = (newText: string) =>
    ({type: 'CHANGE-NEW-POST-TEXT', newText: newText}) as const


export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: 3,
                message: action.addNewPost,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case "CHANGE-NEW-POST-TEXT":
            // let copyState = {...state}
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}