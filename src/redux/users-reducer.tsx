import {ActionsTypes} from "./state";

export type UsersType = {
    id: number
    photos: {
        small: string
        large: string
    }
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string

    }
}
export type UsersPageType = {
    users: Array<UsersType>
}
const initialState: UsersPageType = {
    users: []
}
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
export type initialStateType = typeof initialState

export const followAC = (userId: number) => ({type: 'FOLLOW', userId}) as const
export const unFollowAC = (userId: number) => ({type: 'UNFOLLOW', userId}) as const
export const setUsersAC = (users: Array<UsersType>) => ({type: 'SET-USERS', users}) as const

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
                        return {...u, unfollowed: false}
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