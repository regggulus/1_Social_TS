import React from "react";
import s from './Dialogs.module.css';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";


export function Dialogs() {

    const dialogsData = [
        {id: 1, name: "Mason"},
        {id: 2, name: "Edgar"},
        {id: 3, name: "Felix"},
        {id: 4, name: "Jack"},
        {id: 5, name: "Calvin"}
    ]

    const messagesData= [
        {id: 1, message: "A lot of my staff.."},
        {id: 2, message: "Oke, we`ll see"},
        {id: 3, message: "Dont`s know"},
        {id: 4, message: "What`s up?"},
        {id: 5, message: "What`s up?"}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsItem id={dialogsData[2].id} name={dialogsData[2].name}/>
                <DialogsItem id={dialogsData[3].id} name={dialogsData[3].name}/>
                <DialogsItem id={dialogsData[4].id} name={dialogsData[4].name}/>

            </div>

            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
            </div>
        </div>
    )
}