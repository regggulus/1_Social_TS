import {ActionsTypes, PostType, ProfilePageType} from "./state";
import {rerender} from "../index";

export const addPostAC = (addNewPost: string) =>
    ({type: "ADD-POST", addNewPost: addNewPost}) as const
export const changeNewPostTextAC = (newText: string) =>
    ({type: 'CHANGE-NEW-POST-TEXT', newText: newText}) as const

    const initialState = {
        posts: [
            {id: 1, message: "Hi, how are you", likesCount: 20},
            {id: 2, message: "It's my first post", likesCount: 25}
        ],
        newPostText: ''
    }
    export const profileReducer = (state = initialState, action: ActionsTypes) => {

        switch (action.type) {
            case "ADD-POST":
                let newPost: PostType = {
                    id: 3,
                    message: action.addNewPost,
                    likesCount: 0
                }
                state.posts.push(newPost)
                state.newPostText = ''
                rerender()
                return state
            case "CHANGE-NEW-POST-TEXT":
                // let copyState = {...state}
                state.newPostText = action.newText
                rerender()
                return state
            default:
                return state
        }
    }