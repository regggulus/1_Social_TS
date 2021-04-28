import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {RootStateType} from "../../redux/redux-store";

type MapStateToProps = {
    users: Array<UsersType>
}

type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (usersId: number) => void
    setUsers: (users: Array<UsersType>) => void
}
export const mapStateToProps = (state: RootStateType): MapStateToProps => {
    return {
        users: state.usersPage.users
    }
}
export const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (usersId: number) => {
            dispatch(unFollowAC(usersId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect<MapStateToProps, MapDispatchToProps, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(Users)