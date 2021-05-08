import React from 'react'
import s from "./Users.module.css";
import userPhoto from "../../img/avatar/lebovski.png";
import {UsersType} from "../../redux/users-reducer";


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
    onPageChanged: (pageNumber: number) => void
}
export function Users(props: UsersPropsType) {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages: Array<number> = []
    for(let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                <div>
                    {pages.map(p => {
                        return   <span
                            className={props.currentPage === p ?  s.selectedPage : ''}
                            onClick={ (event) => typeof p === "number" && props.onPageChanged(p)}>{p}</span>
                    })}
                </div>
                {props.users.map(u => <div key={u.id}>
                    <div>
                        <div>
                            <img src={u.photos && u.photos.small != null ? u.photos.small : userPhoto}
                                 alt="The Big Lebowski" className={s.usersPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>UnFollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>
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
        </div>
    )
}