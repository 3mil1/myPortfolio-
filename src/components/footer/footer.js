import React from 'react'
import styles from './footer.module.css'
import footerWave from '../../img/magicpattern-grain-1620401042467-removebg-preview.png'

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <img className={styles.wave} src={footerWave} alt=""/>
            {/*<svg className={styles.curve} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fdc435" fillOpacity="1" d="M0,192L30,192C60,192,120,192,180,176C240,160,300,128,360,122.7C420,117,480,139,540,154.7C600,171,660,181,720,197.3C780,213,840,235,900,250.7C960,267,1020,277,1080,261.3C1140,245,1200,203,1260,160C1320,117,1380,75,1410,53.3L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>*/}
        </div>
    )
}
