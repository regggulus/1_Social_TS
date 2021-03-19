import {ActionsTypes, DialogsPageType} from "./state";

export const changeNewMessageAC = (newMessageText: string) =>
    ({type: 'CHANGE-NEW-MESSAGE-TEXT', newMessageText: newMessageText}) as const
export const newSendMessageAC = (newSendMessage: string) => ({type: 'SEND-MESSAGE', newSendMessage: newSendMessage}) as const

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {

    switch (action.type) {
        case "CHANGE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newMessageText
            return state
        case "SEND-MESSAGE":
            state.newMessageText = action.newSendMessage
            state.newMessageText = ''
            state.messages.push({id: 6, message: action.newSendMessage})
            return state
        default:
            return state
    }

    /*if (action.type === 'CHANGE-NEW-MESSAGE-TEXT') {
        let copyState = {...state}
        copyState.newMessageText = action.newMessageText
        return state
    } else if (action.type === 'SEND-MESSAGE') {
        let copyState = {...state}
        copyState.newMessageText = action.newSendMessage
        copyState.newMessageText = ''
        copyState.messages.push({id: 6, message: action.newSendMessage })
    }
    return state*/
}