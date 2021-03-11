import React from "react";
import s from './Message.module.css'

type MessagePropsType = {
    messages: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <div>
                {props.messages}
            </div>
        </div>
    )
}
