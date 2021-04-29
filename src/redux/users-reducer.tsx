import {ActionsTypes} from "./state";

export type UsersType = {
    id: number
    photoUrl: string
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
        {id: 1, photoUrl: 'https://tlgrm.ru/_/stickers/9e7/6f5/9e76f5da-9232-3232-9184-81bc5c262a05/7.jpg', followed: false, fullName: "Mason", status: 'Hi', location: {city: 'New York', country: 'USA' }},
        {id: 2, photoUrl: 'https://tlgrm.ru/_/stickers/9e7/6f5/9e76f5da-9232-3232-9184-81bc5c262a05/7.jpg', followed: true, fullName: "Edgar", status: 'Yo', location: {city: 'San-Diego', country: 'USA' }},
        {id: 3, photoUrl: 'https://tlgrm.ru/_/stickers/9e7/6f5/9e76f5da-9232-3232-9184-81bc5c262a05/7.jpg', followed: false, fullName: "Felix", status: 'Aloha', location: {city: 'Hawaii', country: 'USA' }},

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