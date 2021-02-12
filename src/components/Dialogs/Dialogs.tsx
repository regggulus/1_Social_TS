import React from "react";
import s from './Dialogs.module.css';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";


export function Dialogs() {

    const dialogs = [
        {id: 1, name: "Mason"},
        {id: 2, name: "Edgar"},
        {id: 3, name: "Felix"},
        {id: 4, name: "Jack"},
        {id: 5, name: "Calvin"}
    ]



    const messages = [
        {id: 1, message: "A lot of my staff.."},
        {id: 2, message: "Oke, we`ll see"},
        {id: 3, message: "Dont`s know"},
        {id: 4, message: "What`s up?"},
        {id: 5, message: "What`s up?"}
    ]

    const dialogsElements = dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    const messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}