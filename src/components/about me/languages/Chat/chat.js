import React, {useEffect, useState} from "react";
import styles from './chat.module.css'
import Grid from "@material-ui/core/Grid";


const messages = [
    {id: 1, content: "Привет, русский мой родной язык", tri: "before"},
    {id: 2, content: "Hi, i improve my english skills", tri: "after"},
    {id: 3, content: "Tere, eesti keeles on saavutatud C1 tase", tri: "before"},
]

export const Chat = () => {


    const [array] = useState(messages)
    const [displayArray, setDisplayArray] = useState([])
    const [displayEl, setDisplayEl] = useState()
    const [typing, setTyping] = useState(false)

    const delay = (ms) =>
        new Promise((res) => {
            setTimeout(() => {
                res()
            }, ms)
        })

    useEffect(() => {
        (async function () {
            for (let el of array) {
                setTyping(true)
                await delay(5000)
                setDisplayEl(el)
            }
            setDisplayEl(undefined)
            await delay(1000)
            setTyping(false)
        })()
    }, [array])

    useEffect(() => {
        displayEl && setDisplayArray((prev) => [...prev, displayEl])
    }, [displayEl])

    return (
        <>
            {displayArray.map((message) => {
                const abc = message.tri === "before" ? (styles.leftIn + " " + styles.left) : (styles.rightIn + " " + styles.right)
                return (
                    <Grid item key={message.id}>
                        <div
                            className={`${styles.talkBubble} ${styles.triRight} ${styles.round} ${abc}`}>
                            <div className={styles.talkText}>
                                <p>{message.content}</p>
                            </div>
                        </div>
                    </Grid>
                )
            })}

            {typing &&
            (<div className={styles.wave}>
                <span className={styles.dot}/>
                <span className={styles.dot}/>
                <span className={styles.dot}/>
            </div>)}
        </>
    )
}
