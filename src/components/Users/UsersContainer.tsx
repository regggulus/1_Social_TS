import React from "react";
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {RootStateType} from "../../redux/redux-store";
import {UsersClassComponent} from "./UsersClassComponent";

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
    }as const
}
export const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (usersId) => {
            dispatch(unFollowAC(usersId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect<MapStateToProps, MapDispatchToProps, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(UsersClassComponent)