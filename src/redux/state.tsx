import {addPostAC, changeNewPostTextAC} from "./profile-reducer";
import {changeNewMessageAC, newSendMessageAC} from "./dialogs-reducer";
import React from "react";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    toggleIsFetchingAC,
    unFollowAC
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
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC>
        | ReturnType<typeof toggleIsFetchingAC>
