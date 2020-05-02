import React from "react";

import { showHideGdpr } from "../utilities/GdprPopUp";
import { gdprText } from "../utilities/gdpr";

import styles from "./Footer.module.css";


export const Footer = () => {
  return (
    <div className={styles.footer}>
      <p style={{marginTop: "1em" }}>If you have any questions or suggestions please contact me directly</p>
      <p>And if you really want to see it here you go: <button onClick={showHideGdpr} className={styles.gdprButton}>GDPR & Impressum</button></p>
      <div id="gdpr" style={{ display: "none" }}>{gdprText}</div>
    </div>
  )
};