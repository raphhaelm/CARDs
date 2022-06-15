import React from 'react';
import Span from '../Span/Span';
import styles from './Main.module.css';
import { FaWhatsapp, FaLinkedinIn, FaMailBulk, FaGithubSquare } from 'react-icons/fa'

function Main() {
    return (
        <div className={styles.container}>
            <header>
                <section></section>
                <h1>Raphael Marques</h1>
            </header>
            <main>
                <Span href="https://api.whatsapp.com/send/?phone=5531991881701&text&app_absent=0" text='Whatsapp' icon={<FaWhatsapp />} />

                <Span href="https://www.linkedin.com/in/raphhael-m/" text='Linked' icon={<FaLinkedinIn />} />
                <Span href="https://github.com/raphhaelm" text='GitHub' icon={<FaGithubSquare />} />
                <Span href="mailto:rmarquescomputadores@gmail.com" text='E-mail' icon={<FaMailBulk />} />
            </main>


        </div>
    )
}

export default Main