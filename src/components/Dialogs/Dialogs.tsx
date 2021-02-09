import React from "react";
import s from './Dialogs.module.css'

export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.item}>Jonny</div>
                <div className={s.item}>Josef</div>
                <div className={s.item}>Steve</div>
                <div className={s.item}>Bill</div>
                <div className={s.item}>Nic</div>
            </div>
        </div>
    )
}