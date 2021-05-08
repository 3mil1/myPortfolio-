import React from "react";
import styles from './languages.module.css'
import Grid from "@material-ui/core/Grid";
import Flags from '../../../img/flags.png'

export const Languages = () => {
    return (
        <>
            <h2 className={styles.title}>Languages</h2>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div className={styles.content}>
                        Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor
                        neque auctor
                        dis
                        ipsum. Pretium cras amet odio amet eleifend id sed cras sed. Aliquet risus posuere aliquet
                        imperdiet
                        sit.
                    </div>
                </Grid>
                <Grid className={styles.center} item xs={6}><img src={Flags} alt=""/></Grid>
            </Grid>

        </>
    )
}
