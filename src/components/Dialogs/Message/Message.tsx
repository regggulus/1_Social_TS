import React from "react";
import s from './Message.module.css'

type MessagePropsType = {
    // id: number
    message: string
}
export function Message(props: MessagePropsType) {
    return(
        <div className={s.message}>{props.message}</div>
    )
}
