import React from "react";
import s from './Dialogs.module.css';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import { Message } from "./Message/Message";



export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogsItem name={"Mason"} id={1}/>
                <DialogsItem name={"Edgar"} id={2}/>
                <DialogsItem name={"Felix"} id={3}/>
                <DialogsItem name={"Jack"} id={4}/>
                <DialogsItem name={"Calvin"} id={5}/>
            </div>

            <div className={s.messages}>
                <Message message={"A lot of my staff.."}/>
                <Message message={"Oke, we`ll see"}/>
                <Message message={"Dont`s know"}/>
                <Message message={"What`s up?"}/>
                <Message message={"What`s up?"}/>
            </div>
        </div>
    )
}