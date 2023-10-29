
import styles from "../Style/Page/Parcours.module.css";

function Parcours() {
    return(
        <>
        <div className={styles.container}>
            <div className={styles.title_cv}>
                <div className={styles.title}>
                    Parcours
                </div>
                <div className={styles.cv}>
                    CV en pdf
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.formation}>
                    <h3>Bac Scientifique</h3>
                    <p>Lycée Ronsard - 41100 Vendôme</p>
                    <p>2017-2020</p>
                </div>
                <div className={styles.line}>
                </div>
                <div className={styles.formation}>
                    <h3>1ère et 2ème année de licence d'histoire de l'art et archéologie</h3>
                    <p>Université lumière Lyon II - Bron</p>
                    <p>2020 - 2022</p>
                </div>
                <div className={styles.line}>
                </div>
                <div className={styles.containerAlternance}>
                    <div className={styles.experience}>
                        <h3>BTS SIO option SLAM - Alternance</h3>
                        <p>Isitech - 69007 Lyon</p>
                        <p>2022 - 2024</p>
                    </div>
                    <div className={styles.experience}>
                        <h3>Concepteur Développeur</h3>
                        <p>CNAM - Villeurbanne</p>
                        <p>2022 - 2024</p>
                    </div>
                </div>

            </div>
            <div className={styles.titleHobbies}>
            </div>
            <div className={styles.hobbies}>
                <div className={styles.hobbie}>
                </div>
                <div className={styles.hobbie}>
                </div>
                <div className={styles.hobbie}>
                </div>
                <div className={styles.hobbie}>
                </div>
            </div>
        </div>
        </>
    )
}

export default Parcours;