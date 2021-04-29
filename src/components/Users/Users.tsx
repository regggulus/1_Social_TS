import React from "react";
import s from "./Users.module.css";
import {UsersType} from "../../redux/users-reducer";

type UsersPropsType = {
    users: Array<UsersType>
    photoUrl: ()=> void
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
                       <img src={u.photoUrl} alt="The Big Lebowski" className={s.usersPhoto}/>
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
                    <div>
                        <button>follow</button>
                    </div>
                </span>
            </div>)
        }</div>
    )
}