import React from "react";
import styles from "./ChatMessage.module.css";

export const ChatMessage = (text) => {
    let chatMessage
    if(text.length === 2){
    chatMessage = <div className={styles.chatMessage}>{text[0]}<a href={text[1][1]}>{text[1][0]}</a></div>
    }
    else{
        chatMessage = <div className={styles.chatMessage}>{text}</div>
    }
    return(
        chatMessage
    )
};