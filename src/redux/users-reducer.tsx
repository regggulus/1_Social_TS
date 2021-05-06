import {ActionsTypes} from "./state";

export type UsersType = {
    id: number
    name: string
    uniquerUrlName: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
    status: string
    location: {
        city: string
        country: string

    }
}

export type UsersPageType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}
export type initialStateType = typeof initialState

export const followAC = (userId: number) => ({type: 'FOLLOW', userId}) as const
export const unFollowAC = (userId: number) => ({type: 'UNFOLLOW', userId}) as const
export const setUsersAC = (users: Array<UsersType>) => ({type: 'SET-USERS', users}) as const
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage}) as const
export const setUsersTotalCountAC = (totalCount: number) => ({type: 'SET_USERS_TOTAL', totalCount}) as const

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
            return {...state, users: action.users}
        }
        case 'SET_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage }
        }
        case 'SET_USERS_TOTAL': {
            return {...state, totalUsersCount: action.totalCount}
        }
        default:
            return state
    }
}