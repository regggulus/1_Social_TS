import React from "react";
import s from "./Users.module.css";
import {UsersType} from "../../redux/users-reducer";
import axios from "axios"
import userPhoto from '../../img/avatar/lebovski.png'

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
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages: Array<number> = []
        for(let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }

        console.log(this.props.totalUsersCount)
        return (
            <div>
                <div>
                    {pages.map(p => {
                     return   <span
                         className={this.props.currentPage === p ?  s.selectedPage : ''}
                         onClick={ () => this.onPageChanged(p)}>{p}</span>
                    })}
                </div>
                {this.props.users.map(u => <div key={u.id}>
                    <div>
                        <div>
                            <img src={u.photos && u.photos.small != null ? u.photos.small : userPhoto}
                                 alt="The Big Lebowski" className={s.usersPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => this.props.unfollow(u.id)}>UnFollow</button>
                                : <button onClick={() => this.props.follow(u.id)}>Follow</button>
                            }
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                    </div>
                </div>)
                }</div>
        )
    }
}
