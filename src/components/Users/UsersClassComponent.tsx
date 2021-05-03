import React from "react";
import s from "./Users.module.css";
import {followAC, initialStateType, setUsersAC, unFollowAC, UsersType} from "../../redux/users-reducer";
import axios from "axios"
import userPhoto from '../../img/avatar/lebovski.png'

type UsersPropsType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}

export class UsersClassComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }

    // getUsers = () => {

    render() {
        return (
            <div>
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
                        <div>
                            {/*<div>{u.location.city}</div>*/}
                            {/*<div>{u.location.country}</div>*/}
                        </div>
                    </div>
                </div>)
                }</div>
        )
    }
}

/*export function Users(props: UsersPropsType) {
    const getUsers = () => {
   if(!props.users.length) {
       axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
           props.setUsers(response.data.items)
       })
   }}
    return (
        <div><UsersClassComponent users={props.users} follow={props.follow} unfollow={props.unfollow} setUsers={props.setUsers}/></div>
        // <div>
        //     <button onClick={getUsers}>Get Users</button>
        //     {props.users.map(u => <div key={u.id}>
        //         <div>
        //             <div>
        //                <img src={u.photos && u.photos.small != null ? u.photos.small : userPhoto} alt="The Big Lebowski" className={s.usersPhoto}/>
        //             </div>
        //             <div>
        //                 {u.followed
        //                     ? <button onClick={() => props.unfollow(u.id)}>UnFollow</button>
        //                     : <button onClick={() => props.follow(u.id)}>Follow</button>
        //                 }
        //             </div>
        //         </div>
        //         <div>
        //             <div>
        //                 <div>{u.name}</div>
        //                 <div>{u.status}</div>
        //             </div>
        //             <div>
        //                 {/!*<div>{u.location.city}</div>*!/}
        //                 {/!*<div>{u.location.country}</div>*!/}
        //             </div>
        //         </div>
        //     </div>)
        // }</div>
    )
}*/
////<<<<<===>>>>>////
