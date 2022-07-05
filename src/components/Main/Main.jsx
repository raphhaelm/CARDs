import React from 'react';
import Span from '../Span/Span';
import styles from './Main.module.css';
import { FaWhatsapp, FaLinkedinIn, FaMailBulk, FaGithubSquare } from 'react-icons/fa'

function Main() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <section>
                    {/* Foto de perfil */}
                    </section>
                    <h1>Raphael Marques</h1>
                </div>
                <div>
                    <p>
                        Desenvolvedor web fullstack, 30 anos,<br /> Belo Horizonte /MG. <br />
                        Atuo como técnico em informática há 10 anos.  <br />
                        Estudei Javascript, HTML5, CSS3, Node.js, SQL, ReactJs e Express no curso de desenvolvedor web da Resilia Educação.
                    </p>
                </div>
            </header>
            <main>
                
                <Span href="https://www.linkedin.com/in/raphhael-m/" text='Linkedin' icon={<FaLinkedinIn />} />
                <Span href="https://github.com/raphhaelm" text='GitHub' icon={<FaGithubSquare />} />
                <Span href="https://api.whatsapp.com/send/?phone=5531991881701&text&app_absent=0" text='Whatsapp' icon={<FaWhatsapp />}  />
                <Span href="mailto:rmarquescomputadores@gmail.com" text='E-mail' icon={<FaMailBulk />}  />
            </main>
        </div>
    )
}

export default Main