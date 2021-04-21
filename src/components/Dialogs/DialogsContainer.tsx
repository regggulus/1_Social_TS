import React from "react";
import {ActionsTypes, DialogsPageType, StoreType} from "../../redux/state";
import {changeNewMessageAC, newSendMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    store: StoreType
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
    changeNewMessageText: (newText: string) => void
    newSendMessage: (newSendMessage: string) => void
}

export function DialogsContainer(props: DialogsPropsType) {
    const state = props.store.getState().dialogsPage
    const onSendMessageClick = (newMessageText: string) => {
        props.store.dispatch(newSendMessageAC(newMessageText))
    }
    const onNewMessageChange = (newMessageText: string) => {
        props.store.dispatch(changeNewMessageAC(newMessageText))
    }

    return (
        <Dialogs dialogsPage={state} dispatch={props.dispatch} changeNewMessageText={onNewMessageChange}
                 newSendMessage={onSendMessageClick}/>
    )
}