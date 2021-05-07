import React from "react";
import Box from "@material-ui/core/Box";
import {Grid} from "@material-ui/core";
import image from '../../img/image.png'
import styles from './main.module.css'
import Button from "@material-ui/core/Button";
import {ThemeProvider} from "@material-ui/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {WorkExp} from "../about me/work experiences/workExp";
import {Skills} from "../about me/skills/skils";
import {Languages} from "../about me/languages/languages";
import {Education} from "../about me/education/education";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#FDC435',
            dark: '#f5af02',
            contrastText: '#25282B',
        },
    },
});

export const Main = () => {
    return (
        <Box>
            <Grid container>
                <Grid item xs={6}>
                    <div className={styles.frontEnd}>FRONT-END developer</div>
                    <div className={styles.myName}>Hello, my name is Emil Värnomasing</div>
                    <div className={styles.about}>Short text with details about you, what you do or your professional career. You can add more
                        information on the about page.
                    </div>

                    <ThemeProvider theme={theme}>
                        <Button variant="contained" color="primary" >
                            About me
                        </Button>
                    </ThemeProvider>
                    <Button variant="outlined">Message Me</Button>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <div className={styles.cssBlob}></div>
                        <img src={image} alt="" className={styles.image}/>
                    </div>
                </Grid>
            </Grid>

            <Skills/>
            <Education/>
            <Languages/>
            <WorkExp/>
        </Box>
    )
}
