import React from "react";
import styles from "./styles.module.scss"

export function Header(){
    return(
        <div className={styles.container}>
            <span >UPLOAD <span className={styles.secondText}>CSV</span></span>
        </div>
    )
}