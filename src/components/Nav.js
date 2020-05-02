import React from "react";
import styles from "./Nav.module.css";

export const Nav = (changeToDe, changeToEng) => {
  return (
    <header>
      <h1 className={styles.title}>StehaufBot</h1>
      <ul>
        <li><button className={styles.changeLanguage} onClick={changeToDe}>DE</button></li>
        <li><button className={styles.changeLanguage} onClick={changeToEng}>ENG</button></li>
      </ul>
    </header>
  );
};