import styles from "../Style/Page/alternance.module.css";

import cnam from "../assets/cnam.png";
function Alternance() {
    return(
        <>
        <div className={styles.entrepriseMissions}>
            <div className={styles.header}>
                <h1 className={styles.h1alternance}>Alternance</h1>

            </div>
            <img src={cnam} alt={cnam} className={styles.imgCnam}/>

            <div className={styles.entreprise}>
                <h2>Concepteur développeur</h2>
                <h3>Missions</h3>
                <p>Automatisations de certaines taches d'une équipe :</p>
                <p>- Développement d'un script en bash qui filtre les dossiers les plus anciens en bash.</p>
                <p>- Interface Excel qui communique avec un serveur afin de lancer des scripts à partir de boutons
                    ou automatiquement.L'inteface ouvre aussi des fichiers.
                </p>
                <p>- Corrections sur un site en Symfony</p>
                <p>Projet pour une autre équipe</p>
                <p>- Développement d'un inventaire en PHP/ SQL à partir d'une autre base, de fichiers excel et
                    csv
                </p>
                <h3>Adresse </h3>
                <p>25 Cr Emile Zola, 69100 Villeurbanne</p>
                <h3>Tuteur </h3>
                <p>O. Griveaux de Octobre 2022 à Aout 2023</p>
                <p>L. Merger de septembre 2023 à Juin 2024</p>
            </div>
        </div>
        </>
    )

}

export default Alternance;