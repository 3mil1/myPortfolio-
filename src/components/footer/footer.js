import React from 'react'
import styles from './footer.module.css'
import footerSVG from '../../img/footer.svg'

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <img className={styles.footer_wave} src={footerSVG} alt=""/>
            <div>
                <p className="footer_copyWrite">© 2021, George Francis. All rights reserved.</p>
            </div>
        </div>
    )
}
