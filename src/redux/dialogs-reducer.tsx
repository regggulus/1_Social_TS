import {ActionsTypes, DialogsPageType} from "./state";

export const changeNewMessageAC = (newMessageText: string) =>
    ({type: 'CHANGE-NEW-MESSAGE-TEXT', newMessageText: newMessageText}) as const
export const newSendMessageAC = (newSendMessage: string) => ({type: 'SEND-MESSAGE', newSendMessage: newSendMessage}) as const

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {

    if (action.type === 'CHANGE-NEW-MESSAGE-TEXT') {
        state.newMessageText = action.newMessageText
        // state._onChange();
    } else if (action.type === 'SEND-MESSAGE') {
        let message =  state.newMessageText
        state.newMessageText = ''
        state.messages.push({id: 6, message: message})
        // state._onChange();
    }
    return state
}