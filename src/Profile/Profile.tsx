import React from "react";
import Cover from '../img/cover/jellyfish1.jpg';
import s from './Profile.module.css'

export function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img src={Cover}/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My post
                <div>
                    New Post
                </div>
                <div className={s.post}>
                    <div className={s.item}>post #1</div>
                    <div className={s.item}>post #2</div>
                    <div className={s.item}>post #3</div>
                </div>
            </div>
        </div>
    )
}

