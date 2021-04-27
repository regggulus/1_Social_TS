import {ActionsTypes} from "./state";

type UsersType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string

    }
}
const initialState = {
    users: [
        {id: 1, followed: false, fullName: "Mason", status: 'Hi', location: {city: 'New York', country: 'USA' }},
        {id: 2, followed: true, fullName: "Edgar", status: 'Yo', location: {city: 'San-Diego', country: 'USA' }},
        {id: 3, followed: false, fullName: "Felix", status: 'Aloha', location: {city: 'Hawaii', country: 'USA' }},

    ]
}
export type initialStateType = typeof initialState

export const followAC = (userId: number) =>
    ({type: 'FOLLOW', userId}) as const
export const unFollowAC = (userId: number) => ({
    type: 'UNFOLLOW', userId}) as const

export const dialogsReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'FOLLOW' : {

        }
        default:
            return state
    }
}