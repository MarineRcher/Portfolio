import styles from "../Style/Page/Parcours.module.css";
import {Link} from "react-router-dom";
import home from './../assets/home.png';
//icons competences
import htmlIcon from './../assets/iconsCompetences/html.png';
import cssIcon from './../assets/iconsCompetences/css.png';
import reactIcon from './../assets/iconsCompetences/react.png';
import nodeIcon from './../assets/iconsCompetences/node.png';
import vbaIcon from './../assets/iconsCompetences/vba.png';
import bashIcon from './../assets/iconsCompetences/bash.png';
import cSharpIcon from './../assets/iconsCompetences/CSharp.png';
import sqlIcon from './../assets/iconsCompetences/sql.png';

//icon hobbies
import bookIcon from './../assets/iconHobbies/book.png';
import cookIcon from './../assets/iconHobbies/cook.png';
import gamesIcon from './../assets/iconHobbies/games.png';
import photoIcon from './../assets/iconHobbies/photo.png';
function Parcours() {
    const competences = [
        { nom: "HTML", pourcentage: "80%", icon: htmlIcon },
        {nom: "CSS", pourcentage: "70%", icon: cssIcon},
        {nom: "REACT", pourcentage: "75%", icon: reactIcon},
        {nom: "NodeJS", pourcentage: "70%", icon: nodeIcon},
        {nom: "VBA", pourcentage: "70%", icon: vbaIcon},
        {nom: "Bash", pourcentage: "70%", icon: bashIcon},
        {nom: "C#", pourcentage: "40%", icon: cSharpIcon},
        {nom: "SQL", pourcentage: "90%", icon: sqlIcon},
    ];
    const hobbies = [
        {nom: "Lecture", icon: bookIcon},
        {nom: "Cuisiner", icon: cookIcon},
        {nom: "Jeux Videos", icon: gamesIcon},
        {nom: "Photographie", icon: photoIcon},
    ]
    return(
        <>
            <div className={styles.header}>
            <h1 className={styles.h1parcours}>Parcours</h1>
                <div className={styles.between}></div>
                <Link to="/" className={styles.link}>
            <img src={home} alt={home} className={styles.homePage}/>
                </Link>
            </div>
        <div className={styles.containerFormationExperience}>
            <div className={styles.Formations}>
                <h1 className={styles.h1formation}>Formation</h1>
                <div className={styles.formation}>
                    <h3 className={styles.h3formation}>Bac Scientifique</h3>
                    <p>Lycee Ronsard</p>
                    <p>2017 - 2020</p>
                </div>
                <div className={styles.formation}>
                    <h3 className={styles.h3formation}>1ere et 2eme annee de licence</h3>
                    <h3 className={styles.h3formation}>histoire de l'art et d'archeologie</h3>
                    <p>Universite Lyon II</p>
                    <p>2020 - 2022</p>
                </div>
                <div className={styles.formation}>
                    <h3 className={styles.h3formation}>BTS SIO Option SLAM</h3>
                    <p>Isitech</p>
                    <p>2022 - 2024</p>
                </div>
            </div>
            <div className={styles.Experiences}>
                <h1 className={styles.h1experience}>Experience</h1>
                <div className={styles.experience}>
                    <h3 className={styles.h2experience}>Concepteur developer</h3>
                    <p>CNAM</p>
                    <p>2022 - 2024</p>
                </div>
            </div>
        </div>

            <div className={styles.containerCompetences}>
                <h1 className={styles.h1Competence}>Competences</h1>
                <div className={styles.competences}  >
                    {competences.map((competence, index) => (
                        <div
                            key={index}
                            className={styles.competence}
                            style={{ '--progress-width': competence.pourcentage as React.CSSProperties}}
                        >
                            <div className={styles.competenceIcon}>
                                <img src={competence.icon} alt={competence.nom} className={styles.icon} />
                            </div>
                            <div className={styles.competenceTitle}>{competence.nom}</div>
                            <div className={styles.competenceBarContainer}>
                                <div
                                    className={styles.competenceBar}

                                ></div>
                            </div>
                            <div className={styles.competencePercentage} >{competence.pourcentage}</div>
                        </div>
                    ))}
                </div>
            </div>


            <div className={styles.titleHobbies}>
                <h1>Centre d'interets</h1>
            </div>
            <div className={styles.hobbies}>
                {hobbies.map((hobbies, index) => (
                <div className={styles.hobbie} key={index}>
                    <div className={styles.hobbieIcon}>
                        <img src={hobbies.icon} alt={hobbies.nom} className={styles.hobbieIconImg}/>
                    </div>
                    <div className={styles.hobbieName}>{hobbies.nom}</div>
                </div>
                ))}
            </div>

        </>
    )
}

export default Parcours;