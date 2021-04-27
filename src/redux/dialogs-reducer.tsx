import {ActionsTypes} from "./state";

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

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
export type initialStateType = typeof initialState

export const changeNewMessageAC = (newMessageText: string) =>
    ({type: 'CHANGE-NEW-MESSAGE-TEXT', newMessageText}) as const
export const newSendMessageAC = (newSendMessage: string) => ({
    type: 'SEND-MESSAGE', newSendMessage}) as const

export const dialogsReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case "CHANGE-NEW-MESSAGE-TEXT": {
            const stateCopy = {...state}
            stateCopy.newMessageText = action.newMessageText
            return stateCopy
        }
        case "SEND-MESSAGE": {
            const stateCopy = {...state}
            stateCopy.newMessageText = action.newSendMessage
            stateCopy.newMessageText = ''
            stateCopy.messages.push({id: 6, message: action.newSendMessage})
            return stateCopy
        }
        default:
            return state
    }
}