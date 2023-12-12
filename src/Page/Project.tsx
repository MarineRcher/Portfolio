import styles from "../Style/Page/Project.module.css";
import home from './../assets/home.png';
import plenty from "../assets/projects/plenty.png";
import medgenix from "../assets/projects/medgenix.png";

import Plenty from "../Documents/rapports/Plenty.pdf";
import Medgenix from "../Documents/rapports/RapportMedGenix.pdf";

import git from "./../assets/icons/github.png";
import {Link} from "react-router-dom";


function Project() {
    const projects = [
        {number: "01.   ", nom: "   Plenty", type: "Application mobile",langage: "React Native, NodeJS, PostgreSQL", content: "Application qui répertorie les aliments les moins cher.", photo: plenty, pdf: Plenty, lienFront: "https://github.com/MarineRcher/plenty", lienBack: "https://github.com/MarineRcher/MedGenix-Backend"},
        {number: "02.   ", nom: "   MedGenix", type: "Interface web",langage: "Reacts tsx, NodeJS, SQL", content: "Interface web pour gerer les projets avec des taches attribuées.", photo: medgenix, pdf: Medgenix, lienFront: "https://github.com/MarineRcher/MedGenix-front.git", lienBack: "https://github.com/MarineRcher/Plenty-API"}
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
                                <div className={styles.buttonRapport}>
                                <a href={projects.pdf} download>
                                    <button>Rapport en PDF</button>
                                </a>
                                </div>
                                <div className={styles.containerIcon}>
                                    <div className={styles.containerLien}>
                                    <h3>Front-End</h3>
                                    <a href={projects.lienFront}>
                                        <img src={git} alt={git} className={styles.icon}/>
                                    </a>
                                    </div>
                                    <div className={styles.containerLien}>
                                    <h3>Back-End</h3>
                                    <a href={projects.lienBack}>
                                        <img src={git} alt={git} className={styles.icon}/>
                                    </a>
                                    </div>
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
