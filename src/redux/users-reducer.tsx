import {ActionsTypes} from "./state";

export type UsersType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string

    }
}
export const initialState = {
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
export const setUsersAC = (users: Array<UsersType>) => ({
    type: 'SET-USERS', users}) as const

export const usersReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'FOLLOW' : {
            return {
                ...state,
                users: state.users.map(u =>  {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case 'UNFOLLOW' : {
            return {
                ...state,
                users: state.users.map(u =>  {
                    if(u.id === action.userId) {
                        return {...u, unFollowed: false}
                    }
                    return u
                })
            }
        }
        case 'SET-USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}