import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
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

    /*const dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogsItem name={d.name} id={d.id}/>)

    const messagesElements = props.dialogsPage.messages
        .map(m => <div className={s.active}>
            <Message messages={m.message}/></div>)
    const newMessageText = props.dialogsPage.newMessageText*/

    const onSendMessageClick = (newMessageText: string) => {
       props.store.dispatch(newSendMessageAC(newMessageText))
    }
    const onNewMessageChange = (newMessageText: string) => {
        // const newMessageText = e.currentTarget.value
        props.store.dispatch(changeNewMessageAC(newMessageText))
    }

    return (
        <Dialogs dialogsPage={state} dispatch={props.dispatch} changeNewMessageText={onNewMessageChange} newSendMessage={onSendMessageClick}/>
        /*<div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div className={s.messagesInput}>
                   <div><textarea
                       value={newMessageText}
                       onChange={onNewMessageChange}
                       placeholder={'Enter your message'}
                   ></textarea></div>
                    <div><button
                        onClick={onSendMessageClick}>add</button></div>
                </div>
            </div>
        </div>*/
    )
}