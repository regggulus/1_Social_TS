import React from "react";
import s from './Dialogs.module.css'

export function Dialogs() {
    return (
        <div className={s.dialogs}>
          <div className={s.dialogsItem}>
              <div className={s.dialog + ' ' + s.active}>Mason</div>
              <div className={s.dialog}>Calvin</div>
              <div className={s.dialog}>Edgar</div>
              <div className={s.dialog}>Felix</div>
              <div className={s.dialog}>Jack</div>
          </div>
            <div className={s.messages}>
                <div className={s.message}>Of course!</div>
                <div className={s.message}>A lot of my staff..</div>
                <div className={s.message}>Oke, we`ll see</div>
                <div className={s.message}>Dont`s know</div>
                <div className={s.message}>What`s up?</div>
            </div>
        </div>
    )
}