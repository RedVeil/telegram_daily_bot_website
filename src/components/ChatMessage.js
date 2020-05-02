import React from "react";
import styles from "./ChatMessage.module.css";

export const ChatMessage = (text) => {
    return(
        <div className={styles.chatMessage}>{text}</div>      
    )
};