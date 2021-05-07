import React from "react";
import styles from './education.module.css'
import {Timeline} from "./timeLine";

export const Education = () => {
    return (
        <>
            <h2 className={styles.title}>Education</h2>
            <Timeline/>
        </>
    )
}
