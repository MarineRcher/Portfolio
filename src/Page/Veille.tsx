
import styles from "../Style/Page/veille.module.css";

import imgVeille from "../assets/veille.png";
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
import accesDefaillant4 from '../assets/veille/php4.png';

import solutionInjection from '../assets/veille/solutionInjectionSQL.png';
import solutionInjection2 from '../assets/veille/solutionInjection2.png';

import solutionXss1 from '../assets/veille/solutionXss1.png';
import solutionXss2 from '../assets/veille/solutionXss2.png';
import solutionXss3 from '../assets/veille/solutionXss3.png';
import solutionXss4 from '../assets/veille/solutionXss4.png';
import solutionXss5 from '../assets/veille/solutionXss5.png';
import solutionXss6 from '../assets/veille/solutionXss6.png';
import solutionXss7 from '../assets/veille/solutionXss7.png';
import solutionXss8 from '../assets/veille/solutionXss8.png';
import solutionXss9 from '../assets/veille/solutionXss9.png';

import solutionDefaillant1 from '../assets/veille/solutionDefaillant1.png';
import solutionDefaillant3 from '../assets/veille/solutionDefaillant3.png';
import solutionDefaillant4 from '../assets/veille/solutionDefaillant4.png'

function Veille() {
    return(
        <>
            <div className={styles.container}>
                <div className={styles.containerTitleVT}>
                    <h1 className={styles.h1TitleVT}>Veille Technologique</h1>
                </div>
                <img src={imgVeille} className={styles.imgVeille}/>
                <div className={styles.containerVeille}>
                <h2>La sécurité des applications web</h2>
                <p>La sécurité des applications web: cette question est d'autant plus cruciale que les attaques
                    informatiques deviennent de plus en plus sophistiquées et peuvent avoir des conséquences
                    désastreuses pour les entreprises et les utilisateurs finaux. Nous examinerons les failles
                    fréquentes telles que l'injection SQL, le Cross-Site Scripting (XSS) et les défauts de contrôle
                    d'accès, qui représentent des vecteurs d'attaques courants exploités par les cybercriminels
                    pour compromettre la sécurité des applications web.
                </p>
                <h3>Failles fréquentes</h3>
                <h4>Injection SQL</h4>
                <p>Les attaques par injection SQL se produisent lorsque des données malveillantes sont
                    injectées dans une base de données via une application web. Cela peut conduire à des
                    fuites de données, à la modification ou à la suppression de données.
                    On peut prendre lʼexemple dʼune page dʼauthentification, lʼauthentification marche avec cette
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

                <img src={accessDefaillant1}/>
                <p>l’url va contenir l’id de l’utilisteur, donc si l’on change son id, on peut accéder à n’importe
                    quel compte utilisateur.</p>
                <img src={accesDefaillant2}/>
                <p>Si le compte admin est associé à l’id 1, avec cet url on peut accéder à son compte:</p>
                <img src={accesDefaillant3}/>
                <p>Des données peuvent etre modifiées si on accède à compte utilisateur autre, on peut
                    modifier ses données si le script comporte ce code</p>
                <img src={accesDefaillant4}/>
                <p>avec l’url joint ci-dessus, on nous permet encore de faire une requete POST, PUT ou
                    DELETE.</p>
                <h3>Solution à ses failles</h3>
                <h4>Injection SQL</h4>
                <p><strong>Requête paramétrées</strong><br/>
                    Afin de créer une requete paramétrée on lui passe une collection de paramètres dont le type
                    et la taille ont été définis.
                    Exemple :

                </p>
                <img src={solutionInjection}/>
                <p>Exemple en C# .Net</p>
                <img src={solutionInjection2}/>
                <p><strong>Utiliser des comptes de Base de données avec des droits spécifique</strong>

                    Eviter de mettre tous les droits sur le compte qui communique avec la bdd depuis le site.

                    Et limiter au stricte minimum les privilèges</p>

                <h4>Cross-Site Scripting (XSS)</h4>
                <p><strong>Filtrer les données reçu et sorties</strong></p>


                <p> On peut retrouver des fonctions comme</p>
                <img src={solutionXss1}/>
                <p>Ou</p>
                <img src={solutionXss2}/>
                <p>qui vont venir encoder les caractères. Ces fonctions encodent tous les caractères spéciaux (", des
                    balises) mais aussi les caractères accentués (é, è, à, ù, etc.). Cependant, </p>
                <img src={solutionXss1}/>

                <p>
                    encode également les simples guillemets, ce qui peut être problématique si vous utilisez la chaîne
                    vulnérable dans un attribut d'une balise HTML qui est sous la forme
                </p>

                <img src={solutionXss3}/>
                <p>
                    Pour éviter cela, vous pouvez ajouter le paramètre
                </p>
                <img src={solutionXss4}/>
                <p>à la fonction </p>
                <img src={solutionXss1}/>
                <p>Ou</p>
                <img src={solutionXss2}/>
                <p>Exemple d’utilisation</p>
                <img src={solutionXss5}/>
                <p><strong>Mettre des mots clés interdits</strong>
                    vous pouvez utiliser la méthode
                </p>

                <img src={solutionXss6}/>

                <p>
                    avec une expression régulière pour supprimer les balises
                </p>
                <img src={solutionXss7}/>
                <p>
                    Exemple
                </p>
                <img src={solutionXss8}/>
                <p><strong>Limiter les entrées</strong>
                    En fonction de ce qu’il doit être renseigné, limiter les entrée avec maxlenght() et minlenght() et
                    autorisé seulement les characteres dont l’utilisateur va avoir besoin avec addEventListener().<br/>

                    Exemple pour entrer un numéro de téléphone :
                </p>
                <img src={solutionXss9}/>
                <h4>Contrôle d’accès défaillant</h4>
                <p>
                    Pour commencer, un identifiant unique pour les utilisateurs qui se connectent est important afin
                    qu’ils soient d’autant plus difficile à trouver.<br/>

                    Utiliser des cookies sécurisés, avec
                </p>
                <img src={solutionDefaillant1}/>
                <p>
                    qui empêche le code JS d’accéder au cookie, de plus, avec secure,

                    les données sont envoyées seulement dans le cas où il s’agit de requêtes HTTPS.
                </p>
                <img src={solutionDefaillant3}/>
                <p>Afin d’éviter des incidents liés au contrôle d’accès défaillants il est important d’attribuer un rôle
                    et de bien séparer en fonctions des droits liés au rôle. <br/>
                    Il faut régulièrement vérifier si l’utilisateur à les droits d’accès en fonctions des actions qu’il
                    fait.
                </p>
                <img src={solutionDefaillant4}/>

                <h3>Conclusion</h3>
                <p>
                    En conclusion, la sécurité des applications web est un enjeu majeur pour les professionnels de l'IT
                    et nécessite une attention constante. <br/>
                    Les failles telles que les injections SQL, le Cross-Site Scripting et les contrôles d'accès
                    défaillants représentent des risques significatifs pour l'intégrité des systèmes
                    d'information. <br/>
                    Heureusement, des solutions existent pour mitiger ces risques, telles que l'utilisation de requêtes
                    paramétrées, le filtrage des entrées et sorties, et l'implémentation de politiques de sécurité
                    strictes.<br/>
                </p>

                <h3>Bibliographie</h3>
                <p>

                    <a href="https://www.cert.ssi.gouv.fr/alerte/CERTFR-2023-ALE-005/"> https://www.cert.ssi.gouv.fr/alerte/CERTFR-2023-ALE-005/</a>
                    <br/>

                    <a href="https://blog.qualys.com/qualys-insights/2023/09/26/qualys-survey-of-top-10-exploited-vulnerabilities-in-2023">https://blog.qualys.com/qualys-insights/2023/09/26/qualys-survey-of-top-10-exploited-vulnerabilities-in-2023</a><br/>

                    <a href="https://www.vaadata.com/">https://www.vaadata.com/</a><br/>

                    <a href="https://www.cert.ssi.gouv.fr/">https://www.cert.ssi.gouv.fr/</a><br/>

                    <a href="https://owasp.org/Top10/A00_2021_Introduction/">https://owasp.org/Top10/A00_2021_Introduction/</a><br/>

                    <a href="https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html">https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html</a>
                </p>


            <div className={styles.containerContent}>
                    <span className={styles.btn}>
                          <a href={veille} target="_blank" rel="noopener noreferrer">
                              Veille Technologique en PDF
                          </a>
                    </span>
            </div>
            </div>
            </div>
        </>
    )
}

export default Veille;