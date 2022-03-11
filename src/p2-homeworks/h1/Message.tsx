import React from 'react'
import s from './Message.module.css'

export type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: MessageType) {
    return (
        <div className={s.messages}>
            <div>
                <img className={s.circle} src={props.avatar}/>
            </div>
            <span className={s.ugol}></span>
            < div className={s.message}>
                <div className={s.name}>{props.name}</div>
                <p className={s.p}>{props.message} <span className={s.span}>{props.time}</span></p>
            </div>
        </div>
    )
}

export default Message
