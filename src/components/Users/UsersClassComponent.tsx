import React from "react";
import {UsersType} from "../../redux/users-reducer";
import axios from "axios"
import {Users} from "./Users";

type UsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUserCount: (totalUserCount: number) => void
}

export class UsersClassComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

     onPageChanged = (pageNumber: number) => {
         this.props.setCurrentPage(pageNumber)
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
             .then((response) => {
                 this.props.setUsers(response.data.items)
             })
     }

    render() {
        return (
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
        )
    }
}
