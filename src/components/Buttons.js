import React from "react";
import styles from "./Buttons.module.css"

export const Buttons = (language, handleYes, handleNo, disableThreshold, actions) => {
    const buttonText = {
        "de":["Ja","Nein"],
        "eng":["Yes","No"]
    }
    return(
        <div>
            <button className={styles.button} onClick={handleYes} disabled={disableThreshold <= actions}>{buttonText[language][0]}</button>
            <button className={styles.button} onClick={handleNo} disabled={disableThreshold <= actions}>{buttonText[language][1]}</button>
        </div>      
    )
};