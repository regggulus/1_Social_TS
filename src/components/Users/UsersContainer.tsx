import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unFollowAC, UsersType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {RootStateType} from "../../redux/redux-store";
import {UsersClassComponent} from "./UsersClassComponent";

type MapStateToProps = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (usersId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUserCount: (totalUserCount: number) => void

}

export const mapStateToProps = (state: RootStateType): MapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUserCount: (totalUsersCount: number) => {
            dispatch(setUsersTotalCountAC(totalUsersCount))
    }
    }
}

export const UsersContainer = connect<MapStateToProps, MapDispatchToProps, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(UsersClassComponent)