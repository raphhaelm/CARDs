import React from 'react';
import styles from './Span.module.css'
import { FaWhatsapp, FaLinkedinIn, FaMailBulk, FaGithubSquare } from 'react-icons/fa'

function Span(props) {

    return (
        <main main className={styles.container}>
        <div onMouseOver={props.color} onMouseOut={props.mouseOut} className={ props.text == 'Whatsapp' ? styles.containerWhatsapp : props.text == 'Linkedin' ? styles.containerLinkedin : props.text == 'GitHub' ? styles.containerGithub : props.text == 'E-mail' ? styles.containerEmail : styles.container } >
            <div  className={styles.text} >
                <a href={props.href}>
                    <span>
                        {props.text}&nbsp;
                    </span>
                    <i>
                        {props.icon}
                    </i>
                </a>

            </div>


        </div>
        </main>

    )
}

export default Span