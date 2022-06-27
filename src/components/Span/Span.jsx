import React from 'react';
import styles from './Span.module.css'
import { FaWhatsapp, FaLinkedinIn, FaMailBulk, FaGithubSquare } from 'react-icons/fa'

function Span(props) {

    return (
        <div onMouseOver={props.color} onMouseOut={props.mouseOut} className={styles.container} >
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

    )
}

export default Span