import React, {useState} from "react";
import styles from './languages.module.css'
import Grid from "@material-ui/core/Grid";
import {Chat} from "./Chat/chat";
import {useElementOnScreen} from "../../customHooks/useElementOnScreen";
import chatSvg from '../../../img/chatSVG.svg'

export const Languages = () => {

    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: "-150px",
        threshold: 1.0
    })

    const [type, setType] = useState(false)
    if (isVisible === true && (type === false)) {
        return setType(true)
    }

    return (
        <div ref={containerRef} style={{minHeight: '360px'}}>
            <img src={chatSvg} alt="" className={styles.chatSvg}/>
            <h2 className={styles.title}>Languages</h2>
            {type
            && <Grid container
                     spacing={2}
                     direction="column"
                     justify="center"
                     style={{width: "25%"}}>
                <Chat/>
            </Grid>}
        </div>
    )
}
