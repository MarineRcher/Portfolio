
import styles from "../Style/Page/veille.module.css";

import home from "../assets/home.png";
import {Link} from "react-router-dom";

import veille from "../Documents/veille.pdf";

import injection1 from '../assets/veille/injectionSQL.png';
import injection2 from '../assets/veille/injectionArbre.png';
import injection3 from '../assets/veille/injectionRequete.png';

import xss1 from '../assets/veille/xssNom.png';
import xss2 from '../assets/veille/xssConsole.png';
import xss3 from '../assets/veille/xssFichier.png';

import accessDefaillant1 from '../assets/veille/accesDefaillant1.png';
import accesDefaillant2 from '../assets/veille/php2.png';
import accesDefaillant3 from '../assets/veille/php3.png';
import accesDefaillant4 from '../assets/veille/php4.php';


function Veille() {
    return(
        <>
            <div className={styles.containerTitleVT}>


                    <h1 className={styles.h1TitleVT}>Veille Technologique</h1>
                    <div className={styles.between}></div>
                    <Link to="/" className={styles.link}>
                        <img src={home} alt={home} className={styles.homePage}/>
                    </Link>
            </div>
            <div className={styles.containerContent}>
                <a href={veille} target="_blank" rel="noopener noreferrer">
                    <button className={styles.button}>Veille Technologique en PDF</button>
                </a>
            </div>
            <div className={styles.containerContent}>
                <h2>La sécurité des applications web1La sécurité des applications web</h2>
                <p>La sécurité des applications web: cette question est d'autant plus cruciale que les attaques
                    informatiques deviennent de plus en plus sophistiquées et peuvent avoir des conséquences<br/>
                    désastreuses pour les entreprises et les utilisateurs finaux. Nous examinerons les failles
                    fréquentes telles que l'injection SQL, le Cross-Site Scripting (XSS) et les défauts de contrôle<br/>
                    d'accès, qui représentent des vecteurs d'attaques courants exploités par les cybercriminels
                    pour compromettre la sécurité des applications web.
                </p>
                <h3>Failles fréquentes</h3>
                <h4>Injection SQL</h4>
                <p>Les attaques par injection SQL se produisent lorsque des données malveillantes sont
                    injectées dans une base de données via une application web. Cela peut conduire à des<br/>
                    fuites de données, à la modification ou à la suppression de données.
                    On peut prendre lʼexemple dʼune page dʼauthentification, lʼauthentification marche avec cette<br/>
                    requête SQL.</p>
                <img src={injection1}/>
                <p><strong>1=1</strong> renvoie toujours True.
                    Les <strong>--</strong> permet de mettre en commentaire du code SQL.
                </p>
                <img src={injection2}/>
                <p>La sécurité des applications web2Dans ce cas, la requête SQL va être :</p>
                <img src={injection3}/>
                <p>Exemple :<br/>
                    CVE-2023-34362 = <strong>exploitation dʼune vulnérabilité dans MOVEit Transfer</strong><br/>
                    Il sʼagit dʼun logiciel de transfert de fichier or, on ne peut pas avoir plus dʼinformation
                    concernant les détail techniques.
                </p>
                <h4>Cross-Site Scripting (XSS)</h4>
                <p>Cette attaque est au même titre que lʼinjective SQL, mais ici
                    Les attaques XSS injectent des scripts malveillants dans les pages web vues par d'autres<br/>
                    utilisateurs, ce qui peut entraîner le vol de cookies, de sessions ou de données personnelles.
                    On peut prendre lʼexemple dʼun formulaire de contact.<br/></p>
                <img src={xss1}/>
                <p>Dans le cas de PHP, le code de renvoie peut être</p>
                <img src={xss2}/>
                <p>Si dans notre case on écrit</p>
                <img src={xss3}/>
                <p>La sécurité des applications web3On va donc nous afficher le fichier “controllerForm.phpˮ.</p>
                <h4>Contrôle dʼaccès défaillant</h4>
                <p>Accès non autorisé a des données et/ou modification des ses données.
                    On peut prendre lʼexemple de ce code qui permet dʼaccéder à dʼautre compte utilisateurs<br/>
                    depuis lʼurl</p>


            </div>


        </>
    )
}

export default Veille;