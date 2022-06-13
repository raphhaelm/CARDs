import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles.container}>
            <header>
                <section></section>
                <h1>Raphael Marques</h1>
            </header>
            <main>
                <a href="https://api.whatsapp.com/send/?phone=5531991881701&text&app_absent=0"><span>Whatsapp</span></a>
                <a href="https://github.com/raphhaelm"><span>GitHub</span></a>
                <a href="https://www.linkedin.com/in/raphhael-m/"><span>Linkedin</span></a>
                <a href="https://gmail.com"><span>Email</span></a>
                <div>

                </div>
            </main>


        </div>
    )
}

export default Main