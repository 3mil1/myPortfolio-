import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme) => ({
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));

const lngs = {
    en: { nativeName: 'ENG' },
    ru: { nativeName: 'RU' },
    est: { nativeName: 'ET' }
};



export const Header = () => {
    const classes = useStyles();
    const { i18n } = useTranslation();


    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <Button size="small">Emil Värnomasing</Button>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                </Typography>

                <div style={{zIndex: 1}}>
                    {Object.keys(lngs).map((lng) => (
                        <Button size="small" key={lng} style={{ fontWeight: i18n.language === lng ? 'bold' : 'normal',  color: "white" }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                            {lngs[lng].nativeName}
                        </Button>
                    ))}
                </div>
            </Toolbar>
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>

            </Toolbar>
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};
