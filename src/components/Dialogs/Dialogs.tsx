import React from "react";
import s from './Dialogs.module.css';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
}

export function Dialogs(props: DialogsPropsType) {

    const dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogsItem name={d.name} id={d.id}/>)

    const messagesElements = props.dialogsPage.messages
        .map(m => <div className={s.active}>
            <Message message={m.message}/>
        </div>)
    const newMessageElement: any = React.createRef()
    const addMessage = () => {
        const text = newMessageElement.current.value
        alert(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div className={s.messagesInput}>
                   <div><textarea ref={newMessageElement}></textarea></div>
                    <div><button onClick={addMessage}>add</button></div>
                </div>
            </div>
        </div>
    )
}