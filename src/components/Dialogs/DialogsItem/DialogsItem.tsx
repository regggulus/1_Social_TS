import React from "react";
import {NavLink} from "react-router-dom";
import s from './DialogsItem.module.css';

type DialogsItemProps = {
    name: string
    id: number
}

export function DialogsItem(props: DialogsItemProps) {
    const path = "/dialogs/" + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}