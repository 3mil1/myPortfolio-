import React from "react";
import Box from "@material-ui/core/Box";
import {Grid} from "@material-ui/core";
import styles from './main.module.css'
import {styled} from "@material-ui/core/styles";
import {spacing} from "@material-ui/system";
import MuiButton from "@material-ui/core/Button";
import {ThemeProvider} from "@material-ui/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {Skills} from "../about me/skills/skils";
import {Languages} from "../about me/languages/languages";
import {Education} from "../about me/education/education";
import {SvgBlob} from "../svg/Blobsvg";
import mySvgAnim from '../../img/mySvg_Animate.svg'
import { useTranslation, Trans } from 'react-i18next';

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

const Button = styled(MuiButton)(spacing);

export const Main = () => {
    // eslint-disable-next-line no-unused-vars
    const { t } = useTranslation()

    return (
        <Box>
            <Grid container direction={"column"} spacing={5}>
                <Grid item style={{marginBottom: "13rem", padding: "3rem 0 0 8rem"}}>
                    <Grid container>
                        <Grid item xs={6}>
                            <div className={styles.frontEnd}>
                                <Trans i18nKey="whoIam.feDev">
                                FRONT-END developer
                                </Trans>
                            </div>
                            <div className={styles.myName}>Hey! I’m Emil</div>
                            <div className={styles.about}>Short text with details about you, what you do or your
                                professional
                                career. You can add more
                                information on the about page.
                            </div>
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="primary" mr={2}>
                                    Downland CV
                                </Button>
                            </ThemeProvider>
                            <Button variant="outlined">Hire me</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <div>
                                <SvgBlob/>
                                <img src={mySvgAnim} className={styles.image} alt=""/>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>

                <div style={{margin: "0 100px"}}>
                    <Grid item><Skills/></Grid>
                    <Grid item><Education/></Grid>
                    <Grid item><Languages/></Grid>
                </div>
            </Grid>
        </Box>
    )
}
