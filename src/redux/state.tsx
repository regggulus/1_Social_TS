import {addPostAC, changeNewPostTextAC} from "./profile-reducer";
import {changeNewMessageAC, newSendMessageAC} from "./dialogs-reducer";
import React from "react";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching,
    unFollow
} from "./users-reducer";

let _onChange = () => {
    console.log("hi")
}
export const subscriber = (observer: () => void) => {
    _onChange = observer
}


export type ActionsTypes =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostTextAC>
    | ReturnType<typeof changeNewMessageAC>
    | ReturnType<typeof newSendMessageAC>
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersTotalCount>
        | ReturnType<typeof toggleIsFetching>
