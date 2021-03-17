import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {ActionsTypes, DialogsPageType} from "../../redux/state";
import {changeNewMessageAC, newSendMessageAC} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
    changeNewMessageText: (newText: string) => void
    newSendMessage: (newSendMessage: string) => void
}

export function Dialogs(props: DialogsPropsType) {

    const dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogsItem name={d.name} id={d.id}/>)

    const messagesElements = props.dialogsPage.messages
        .map(m => <div className={s.active}>
            <Message messages={m.message}/></div>)
    const newMessageText = props.dialogsPage.newMessageText

    const onSendMessageClick = () => {
       props.dispatch(newSendMessageAC(newMessageText))
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newMessageText = e.currentTarget.value
        props.dispatch(changeNewMessageAC(newMessageText))
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
                       value={newMessageText}
                       onChange={onNewMessageChange}
                       placeholder={'Enter your message'}
                   ></textarea></div>
                    <div><button
                        onClick={onSendMessageClick}>add</button></div>
                </div>
            </div>
        </div>
    )
}