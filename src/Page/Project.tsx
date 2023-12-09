import styles from "../Style/Page/Project.module.css";

import plenty from "../assets/projects/plenty.png";
import medgenix from "../assets/projects/medgenix.png";


function Project() {
    const projects = [
        {number: "01.   ", nom: "   Plenty", type: "Application mobile",langage: "React Native, NodeJS, PostgreSQL", content: "Application qui repertorie les aliments les moins cher.", photo: plenty},
        {number: "02.   ", nom: "   MedGenix", type: "Interface web",langage: "Reacts tsx, NodeJS, SQL", content: "Interface web pour gerer les projets avec des taches attribuees.", photo: medgenix}
    ]
    return (
        <>

            <div className={styles.containerPage}>
                <div className={styles.containerTitleAP}>
                    <h1 className={styles.h1TitleAp}>Projets</h1>

                </div>
                {projects.map((projects, index) => (
                    <div className={styles.containeTitleAndAp} key={index}>
                        <div className={styles.containerTitle} >
                            <h2>{projects.number}{projects.nom}</h2>
                            <div className={styles.trait}></div>
                        </div>
                <div className={styles.containerAP}>
                <div className={styles.AP}>
                        <div className={styles.images}>
                            <img src={projects.photo} alt={projects.nom}/>
                        </div>
                        <div className={styles.containerContent}>
                        <p>{projects.type}</p>
                        <p className={styles.content}>{projects.content}</p>
                        <p>{projects.langage}</p>
                        <button>Rapport en PDF</button>
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
