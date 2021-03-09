import React from "react";
import s from './Dialogs.module.css';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {ActionsTypes, DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

export function Dialogs(props: DialogsPropsType) {

    const dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogsItem name={d.name} id={d.id}/>)

    const messagesElements = props.dialogsPage.messages
        .map(m => <div className={s.active}>
            <Message message={m.message}
            />
        </div>)

    const onSendMessageClick = () => {
        console.log('text')
    }
    const onNewMessageChange = (e: any) => {
        const newMessageText = e.currentTarget.value
        alert(newMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div className={s.messagesInput}>
                   <div><textarea 
                       ref={onSendMessageClick}></textarea></div>
                    <div><button 
                        onClick={onNewMessageChange}>add</button></div>
                </div>
            </div>
        </div>
    )
}