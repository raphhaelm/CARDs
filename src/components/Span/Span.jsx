import React from 'react';
import styles from './Span.module.css'

function Span(props) {
    return (
        <div className={styles.container}>
            <a style={{backgroundColor: props.color}} href={props.href}><span>{props.text} {props.icon}</span></a>
        </div>

    )
}

export default Span