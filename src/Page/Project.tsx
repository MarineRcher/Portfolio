import styles from "../Style/Page/Project.module.css";
import home from './../assets/home.png';
import plenty from "../assets/projects/plenty.png";
import medgenix from "../assets/projects/medgenix.png";
import inventLab from "../assets/projects/inventLab.png";
import GSB from "../assets/projects/gsb.png";

import Plenty from "../Documents/rapports/Plenty.pdf";
import Medgenix from "../Documents/rapports/RapportMedGenix.pdf";
import Invent from "../Documents/rapports/AP3.pdf";
import gsb from "../Documents/rapports/AP4.pdf";

import git from "./../assets/icons/github.png";
import {Link} from "react-router-dom";


function Project() {
    const projects = [
        {number: "01.   ", nom: "   Plenty", type: "Application mobile",langage: "React Native, NodeJS, PostgreSQL", content: "Application qui répertorie les aliments les moins cher.", photo: plenty, pdf: Plenty, lienFront: "https://github.com/MarineRcher/plenty", lienBack: "https://github.com/MarineRcher/MedGenix-Backend"},
        {number: "02.   ", nom: "   MedGenix", type: "Interface web",langage: "Reacts tsx, NodeJS, SQL", content: "Interface web pour gerer les projets avec des taches attribuées.", photo: medgenix, pdf: Medgenix, lienFront: "https://github.com/MarineRcher/MedGenix-front.git", lienBack: "https://github.com/MarineRcher/Plenty-API"},
        {number: "03.   ", nom: "   InventLab", type: "Application client lourd",langage: "C#", content: "Application client lourd à destination des médecins, afin de gérer les patients, les ordonnances et le stock.", photo: inventLab, pdf: Invent, lien: "https://github.com/MarineRcher/InventLab"},
        {number: "04.   ", nom: "   Gestionnaire de stock", type: "Interface web",langage: "PHP & SQL", content: "Interface web pour gerer le stock d'un laboratoire pharmaceutique pour la gestion de médicaments, substances actives et matériel.", photo: GSB, pdf: gsb, lien: "https://github.com/MarineRcher/PPE4_GestionStock"}
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
                                <a href={projects.pdf} target="_blank" rel="noopener noreferrer">
                                    <button>Rapport en PDF</button>
                                </a>
                                </div>
                                <div className={styles.containerIcon}>
                                {projects.lienFront && (
                                    <div className={styles.containerLien}>
                                        <h3>Front-End</h3>
                                        <a href={projects.lienFront}>
                                            <img src={git} alt={git} className={styles.icon}/>
                                        </a>
                                    </div>
                                )}
                                {projects.lienBack && (
                                    <div className={styles.containerLien}>
                                        <h3>Back-End</h3>
                                        <a href={projects.lienBack}>
                                            <img src={git} alt={git} className={styles.icon}/>
                                        </a>
                                    </div>
                                )}
                                {projects.lien && (
                                    <div className={styles.containerLien}>
                                        <h3>Script</h3>
                                        <a href={projects.lien}>
                                            <img src={git} alt={git} className={styles.icon}/>
                                        </a>
                                    </div>
                                )}
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
