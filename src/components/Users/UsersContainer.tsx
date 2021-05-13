import React from "react";
import {connect} from "react-redux";
import {
    follow,
    toggleIsFetching,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    unFollow,
    UsersType
} from "../../redux/users-reducer";
import {RootStateType} from "../../redux/redux-store";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../preloader/Prloader";

type UsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    currentPage: number
    totalUsersCount: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUserCount: (totalUserCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    isFetching: boolean
}

export class UsersClassComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                pageSize={this.props.pageSize}
                setUsers={this.props.setUsers}
                currentPage={this.props.currentPage}
                setCurrentPage={this.props.setCurrentPage}
                totalUsersCount={this.props.totalUsersCount}
                setTotalUserCount={this.props.setTotalUserCount}
                onPageChanged={this.onPageChanged}
            />
            </div>
        )
    }
}

type MapStateToProps = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (usersId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUserCount: (totalUserCount: number) => void
    toggleIsFetching: (isFetching: boolean) =>void

}

export const mapStateToProps = (state: RootStateType): MapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }as const
}

export const UsersContainer = connect<MapStateToProps, MapDispatchToProps, {}, RootStateType>(mapStateToProps, {
    follow: follow,
    unfollow: unFollow,
    setUsers: setUsers,
    setCurrentPage: setCurrentPage,
    setTotalUserCount: setUsersTotalCount,
    toggleIsFetching: toggleIsFetching
})(UsersClassComponent)