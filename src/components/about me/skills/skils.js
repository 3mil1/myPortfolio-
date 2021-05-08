import React from "react";
import styles from './skills.module.css'
import {Chart} from "./Chart";
import Grid from "@material-ui/core/Grid";


export const Skills = () => {


    return (
        <>
            <h2 className={styles.title}>Skills</h2>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <div className={styles.content}>
                        Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor neque auctor dis ipsum.
                        Pretium cras amet odio amet eleifend id sed cras sed. Aliquet risus posuere aliquet imperdiet
                        sit.
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Chart/>
                </Grid>
            </Grid>
        </>
    )
}


