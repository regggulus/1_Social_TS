import React from "react";
import {UsersType} from "../../redux/users-reducer";

type UsersPropsType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}
export function Users(props: UsersPropsType) {
    return (
        <div>{
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src="" alt=""/>
                    </div>
                    <div>
                        <button>follow</button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }</div>
    )
}