import styles from "../Style/Page/Project.module.css";
import home from './../assets/home.png';
import plenty from "../assets/projects/plenty.png";
import medgenix from "../assets/projects/medgenix.png";

import Plenty from "../Documents/rapports/Plenty.pdf";
import Medgenix from "../Documents/rapports/Rapport MedGenix.pdf";

import git from "./../assets/icons/github.png";
import {Link} from "react-router-dom";


function Project() {
    const projects = [
        {number: "01.   ", nom: "   Plenty", type: "Application mobile",langage: "React Native, NodeJS, PostgreSQL", content: "Application qui repertorie les aliments les moins cher.", photo: plenty, pdf: Plenty},
        {number: "02.   ", nom: "   MedGenix", type: "Interface web",langage: "Reacts tsx, NodeJS, SQL", content: "Interface web pour gerer les projets avec des taches attribuees.", photo: medgenix, pdf: Medgenix}
    ]
    return (
        <>

            <div className={styles.containerPage}>
                    <div className={styles.containerTitleAP}>
                        <h1 className={styles.h1TitleAp}>Projets</h1>
                        <div className={styles.between}></div>
                        <Link to="/" className={styles.link}>
                            <img src={home} alt={home} className={styles.homePage}/>
                        </Link>
                    </div>

                {projects.map((projects, index) => (
                    <div className={styles.containeTitleAndAp} key={index}>
                        <div className={styles.containerTitle} >
                            <h3>{projects.number}{projects.nom}</h3>
                            <div className={styles.trait}></div>
                        </div>
                <div className={styles.containerAP}>
                <div className={styles.AP}>
                        <div className={styles.images}>
                            <img src={projects.photo} alt={projects.nom} className={styles.imagesProject}/>
                        </div>
                        <div className={styles.containerContent}>
                        <p>{projects.type}</p>
                        <p className={styles.content}>{projects.content}</p>
                        <p>{projects.langage}</p>
                            <div className={styles.buttonAndGit}>
                                <a href={projects.pdf} download>
                                    <button>Rapport en PDF</button>
                                </a>
                                <div className={styles.containerIcon}>
                                <img src={git} alt={git} className={styles.icon}/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                    </div>
                ))}
            </div>
        </>
    );
}

export default Project;
