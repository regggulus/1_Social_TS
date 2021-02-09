import React from "react";
import s from './Dialogs.module.css'

export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>Jonny</div>
                <div className={s.dialog}>Josef</div>
                <div className={s.dialog}>Steve</div>
                <div className={s.dialog}>Bill</div>
                <div className={s.dialog}>Nic</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Now I know what to do</div>
                <div className={s.message}>Of course!</div>
                <div className={s.message}>A lot of my staff</div>
                <div className={s.message}>Do you remember that?</div>
                <div className={s.message}>What's up?</div>
            </div>
        </div>
    )
}