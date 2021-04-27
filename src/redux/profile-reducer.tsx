import {ActionsTypes} from "./state";

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: 20},
        {id: 2, message: "It's my first post", likesCount: 25}
    ],
        newPostText: ''

}
export type initialStateType = typeof initialState

export const addPostAC = (addNewPost: string) =>
    ({type: "ADD-POST", addNewPost}) as const
export const changeNewPostTextAC = (newText: string) =>
    ({type: 'CHANGE-NEW-POST-TEXT', newText}) as const

    export const profileReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {

        switch (action.type) {
            case "ADD-POST": {
                let newPost: PostType = {
                    id: 3,
                    message: action.addNewPost,
                    likesCount: 0
                }
                const stateCopy = {...state}
                stateCopy.posts = [...state.posts]
                stateCopy.posts.push(newPost)
                stateCopy.newPostText = ''
                return stateCopy
            }
            case "CHANGE-NEW-POST-TEXT": {
                const stateCopy = {...state}
                stateCopy.posts = [...state.posts]
                stateCopy.newPostText = action.newText
                return stateCopy
            }
            default:
                return state
        }
    }