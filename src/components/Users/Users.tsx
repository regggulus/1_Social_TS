import React from "react";
import s from "./Users.module.css";
import {UsersType} from "../../redux/users-reducer";

type UsersPropsType = {
    users: Array<UsersType>
    // photoUrl: ()=> void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}

export function Users(props: UsersPropsType) {
   if(props.users.length === 0) props.setUsers([
        {
            id: 1,
            photoUrl: 'https://tlgrm.ru/_/stickers/9e7/6f5/9e76f5da-9232-3232-9184-81bc5c262a05/7.jpg',
            followed: false,
            fullName: "Mason",
            status: 'Hi',
            location: {
                city: 'New York',
                country: 'USA'
            }
        },
        {
            id: 2,
            photoUrl: 'https://tlgrm.ru/_/stickers/9e7/6f5/9e76f5da-9232-3232-9184-81bc5c262a05/7.jpg',
            followed: false,
            fullName: "Edgar",
            status: 'Yo',
            location: {
                city: 'San-Diego',
                country: 'USA'
            }
        },
        {
            id: 3,
            photoUrl: 'https://tlgrm.ru/_/stickers/9e7/6f5/9e76f5da-9232-3232-9184-81bc5c262a05/7.jpg',
            followed: false,
            fullName: "Felix",
            status: 'Aloha',
            location: {
                city: 'Hawaii',
                country: 'USA'
            }
        }
    ])
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
                        {u.followed ? ( <button onClick={() => {
                                props.unfollow(u.id)
                            }}>UnFollow</button>
                        ) :( <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>)}
                    </div>
                </span>
            </div>)
        }</div>
    )
}