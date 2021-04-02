import {ActionsTypes, DialogsPageType} from "./state";
import {rerender} from "../index";

const initialState = {
    dialogs: [
        {id: 1, name: "Mason"},
        {id: 2, name: "Edgar"},
        {id: 3, name: "Felix"},
        {id: 4, name: "Jack"},
        {id: 5, name: "Calvin"}
    ],
        messages: [
        {id: 1, message: "A lot of my staff..."},
        {id: 2, message: "Oke, we`ll see"},
        {id: 3, message: "Dont`s know"},
        {id: 4, message: "What`s up?"}
    ],
        newMessageText: ''
}

export const changeNewMessageAC = (newMessageText: string) =>
    ({type: 'CHANGE-NEW-MESSAGE-TEXT', newMessageText: newMessageText}) as const
export const newSendMessageAC = (newSendMessage: string) => ({type: 'SEND-MESSAGE', newSendMessage: newSendMessage}) as const

export const dialogsReducer = (state = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case "CHANGE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newMessageText
            rerender()
            return state
        case "SEND-MESSAGE":
            state.newMessageText = action.newSendMessage
            state.newMessageText = ''
            state.messages.push({id: 6, message: action.newSendMessage})
            rerender()
            return state
        default:
            return state
    }
}