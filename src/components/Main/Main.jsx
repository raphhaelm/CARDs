import React from 'react';
import Span from '../Span/Span';
import styles from './Main.module.css';
import { FaWhatsapp, FaLinkedinIn, FaMailBulk, FaGithubSquare } from 'react-icons/fa'

function Main() {
    function backgroundWhatsapp(e) {
        e.target.style.background = "#25D366"
    }
    function backgroundLinkedin(e) {
        e.target.style.backgroundColor = "#0077b5"
    }
    function backgroundGithub(e) {
        e.target.style.background = "#272b33"
    }
    function backgroundEmail(e) {
        e.target.style.background = "#8B0000"
    }
    function out(e) {
        console.log('Foudasse')


    }
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <section></section>
                    <h1>Raphael Marques</h1>
                </div>
                <div>
                    <p>
                        Desenvolvedor web fullstack, 30 anos,<br /> Belo Horizonte /MG. <br />
                        Atuo como técnico em informáica há 10 anos.  <br />
                        Estudei Javascript, HTML5, CSS3, Node.js, SQL, ReactJs e Express no curso de desenvolvedor web da Resilia Educação.
                    </p>
                </div>
            </header>
            <main>
                <Span href="https://api.whatsapp.com/send/?phone=5531991881701&text&app_absent=0" text='Whatsapp' icon={<FaWhatsapp />} color={backgroundWhatsapp} />
                <Span href="https://www.linkedin.com/in/raphhael-m/" text='Linkedin' icon={<FaLinkedinIn />} color={backgroundLinkedin} />
                <Span href="https://github.com/raphhaelm" text='GitHub' icon={<FaGithubSquare />} color={backgroundGithub} />
                <Span href="mailto:rmarquescomputadores@gmail.com" text='E-mail' icon={<FaMailBulk />} color={backgroundEmail} />
            </main>
        </div>
    )
}

export default Main