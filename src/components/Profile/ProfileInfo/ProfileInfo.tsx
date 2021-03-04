import React from "react";
import s from './ProfileInfo.module.css'
import Cover from "../../../img/cover/jellyfish1.jpg";

export function ProfileInfo() {
    return (
        <div className={s.profileInfo}>
            <div>
                <img src={Cover} alt={""}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}