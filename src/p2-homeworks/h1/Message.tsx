import React from 'react'
import styles from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={styles.container}>
            <img className={styles.ava}
                 src={props.avatar}
                 alt="img" />
            <div className={styles.messageBox}>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.message}>{props.message}</p>
                <p className={styles.time}>{props.time}</p>
            </div>
            <div className={styles.triangle}></div>
        </div>
    )
}

export default Message
