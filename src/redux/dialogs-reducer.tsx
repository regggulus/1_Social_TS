import {ActionsTypes, DialogsPageType} from "./state";

export const changeNewMessageAC = (newMessageText: string) =>
    ({type: 'CHANGE-NEW-MESSAGE-TEXT', newMessageText: newMessageText}) as const
export const newSendMessageAC = (newSendMessage: string) => ({type: 'SEND-MESSAGE', newSendMessage: newSendMessage}) as const

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {

    if (action.type === 'CHANGE-NEW-MESSAGE-TEXT') {
        let copyState = {...state}
        copyState.newMessageText = action.newMessageText
        return state
    } else if (action.type === 'SEND-MESSAGE') {
        let copyState = {...state}
        copyState.newMessageText = action.newSendMessage
        copyState.newMessageText = ''
        copyState.messages.push({id: 6, message: action.newSendMessage })
        // state._onChange();
    }
    return state
}