import styles from './../Style/Page/Competences.module.css';

import star from './../assets/etoileVide.png';
import emptyStar from './../assets/etoilePleine.png';

function Competences() {
    return(
        <>
            <div className={styles.containerPage}>
                <div className={styles.containerTitle}>
                    <h1 className={styles.titleh1}>Compétences</h1>
                    <div className={styles.trait}></div>
                </div>

                <div className={styles.containerCompetences}>
                    <div className={styles.competence}>
                        <h2 className={styles.h2Competences}>React</h2>
                        <div className={styles.rate}>
                            <img className={styles.icon} src={emptyStar} />
                            <img className={styles.icon} src={emptyStar} />
                            <img className={styles.icon} src={emptyStar} />
                            <img className={styles.icon} src={emptyStar} />
                            <img className={styles.icon} src={star} />
                        </div>
                    </div>
                    <div className={styles.competence}>
                        <h2 className={styles.h2Competences}>HTML</h2>
                        <div className={styles.rate}>
                            <img className={styles.icon} src={emptyStar} />
                            <img className={styles.icon} src={emptyStar} />
                            <img className={styles.icon} src={emptyStar} />
                            <img className={styles.icon} src={emptyStar} />
                            <img className={styles.icon} src={emptyStar} />
                        </div>
                    </div>
                    <div className={styles.competence}>
                        <h2 className={styles.h2Competences}>CSS</h2>
                        <div className={styles.rate}>
                            <img className={styles.icon} src={emptyStar} />
                            <img className={styles.icon} src={emptyStar} />
                            <img className={styles.icon} src={emptyStar} />
                            <img className={styles.icon} src={emptyStar} />
                            <img className={styles.icon} src={emptyStar} />
                        </div>
                    </div>
                    <div className={styles.competence}>
                        <h2 className={styles.h2Competences}>Java</h2>
                        <div className={styles.rate}>
                            <img className={styles.icon} src={emptyStar} />
                            <img className={styles.icon} src={star} />
                            <img className={styles.icon} src={star} />
                            <img className={styles.icon} src={star} />
                            <img className={styles.icon} src={star} />
                        </div>
                    </div>
                    <div className={styles.competence}>
                        <h2 className={styles.h2Competences}>VBA</h2>
                        <div className={styles.rate}>
                            <img className={styles.icon} src={emptyStar} />
                            <img className={styles.icon} src={emptyStar} />
                            <img className={styles.icon} src={emptyStar} />
                            <img className={styles.icon} src={star} />
                            <img className={styles.icon} src={star} />
                        </div>
                    </div>
                    <div className={styles.competence}>
                        <h2 className={styles.h2Competences}>NodeJS</h2>
                        <div className={styles.rate}>
                            <img className={styles.icon} src={emptyStar} />
                            <img className={styles.icon} src={emptyStar} />
                            <img className={styles.icon} src={emptyStar} />
                            <img className={styles.icon} src={emptyStar} />
                            <img className={styles.icon} src={star} />
                        </div>
                    </div>
                    <div className={styles.competence}>
                        <h2 className={styles.h2Competences}>SQL</h2>
                        <div className={styles.rate}>
                            <img className={styles.icon} src={emptyStar} />
                            <img className={styles.icon} src={emptyStar} />
                            <img className={styles.icon} src={emptyStar} />
                            <img className={styles.icon} src={emptyStar} />
                            <img className={styles.icon} src={star} />
                        </div>
                    </div>
                </div>
                <div className={styles.containerGrille}>
                    <p className={styles.contentCompetence}>Vous pouvez trouver ma fiche de compétences remplis au cours de mon alternance. Elle est disponible au format xlsx et pdf.</p>
                    <div className={styles.boutons}>
                        <button>Télécharger la grille au format .pdf</button>
                        <button>Télécharger la grille au format .xlsx</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Competences;