import styles from "../Style/Page/Project.module.css";

function Project() {
    return (
        <>

            <div className={styles.containerPage}>
                <div className={styles.containerTitleAP}>
                    <h1 className={styles.h1TitleAp}>Projets</h1>
                    <div className={styles.trait}></div>
                </div>
                <div className={styles.containerAP}>
                    <div className={styles.AP}>
                        <h2>Plenty</h2>
                        <p>Application mobile</p>
                        <p>React Native, NodeJS, PostgreSQL</p>
                        <p className={styles.content}>Application qui répertorie les </p>
                        <p className={styles.content}>aliments les moins cher.</p>

                        <button>Rapport en PDF</button>
                    </div>
                    <div className={styles.AP}>
                        <h2>MedGenix</h2>
                        <p>Application Web</p>
                        <p>React TS, NodeJS, MariaDB</p>
                        <p className={styles.content}>Application qui gère les projets en gérant</p>
                        <p className={styles.content}> les tâches à faire par projet</p>
                        <button>Rapport en PDF</button>
                    </div>
                    <div className={styles.AP}>
                        <h2>AP2</h2>
                        <p>Client lourd</p>
                        <p>Java, MariaDB</p>
                        <p>Inventaire de médicaments.</p>
                        <button>Rapport en PDF</button>
                    </div>
                    <div className={styles.AP}>
                        <h2>AP3</h2>
                        <p>Client lourd</p>
                        <p>Java, MariaDB</p>
                        <p>Inventaire de médicaments.</p>
                        <button>Rapport en PDF</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;
