import React from "react";
import Box from "@material-ui/core/Box";
import {Grid} from "@material-ui/core";
import styles from './main.module.css'
import Button from "@material-ui/core/Button";
import {ThemeProvider} from "@material-ui/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {WorkExp} from "../about me/work experiences/workExp";
import {Skills} from "../about me/skills/skils";
import {Languages} from "../about me/languages/languages";
import {Education} from "../about me/education/education";
import {SvgBlob} from "../svg/Blobsvg";
import mySvgAnim from '../../img/mySvg_Animate.svg'

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
            <Grid container direction={"column"} spacing={5}>
                <Grid item style={{marginBottom: 150}}>
                    <Grid container>
                        <Grid item xs={6}>
                            <div className={styles.frontEnd}>FRONT-END developer</div>
                            <div className={styles.myName}>Hello, my name is Emil Värnomasing</div>
                            <div className={styles.about}>Short text with details about you, what you do or your
                                professional
                                career. You can add more
                                information on the about page.
                            </div>

                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="primary">
                                    About me
                                </Button>
                            </ThemeProvider>
                            <Button variant="outlined">Message Me</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <div>
                                <SvgBlob/>
                                <img src={mySvgAnim} className={styles.image} alt=""/>

                            </div>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item><Skills/></Grid>
                <Grid item><Education/></Grid>
                <Grid item><Languages/></Grid>
                <Grid item><WorkExp/></Grid>
            </Grid>
        </Box>
    )
}
