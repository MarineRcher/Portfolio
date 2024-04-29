import styles from "../Style/Page/Parcours.module.css";
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
import cv from "../Documents/cv.pdf";
import syntese from "../Documents/TableauDeSynthese.pdf";


//icons competences
import htmlIcon from './../assets/iconsCompetences/html.png';
import cssIcon from './../assets/iconsCompetences/css.png';
import reactIcon from './../assets/iconsCompetences/react.png';
import nodeIcon from './../assets/iconsCompetences/node.png';
import vbaIcon from './../assets/iconsCompetences/vba.png';
import bashIcon from './../assets/iconsCompetences/bash.png';
import cSharpIcon from './../assets/iconsCompetences/CSharp.png';
import sqlIcon from './../assets/iconsCompetences/sql.png';
import PHP from './../assets/iconsCompetences/php.png';
interface CustomCSSProperties extends React.CSSProperties {
    '--progress-width'?: string;
}
//icon hobbies
import bookIcon from './../assets/iconHobbies/book.png';
import cookIcon from './../assets/iconHobbies/cook.png';
import gamesIcon from './../assets/iconHobbies/games.png';
import photoIcon from './../assets/iconHobbies/photo.png';
function Parcours() {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;
    useEffect(() => {
        if (isActive("/parcours")) {
            document.body.style.backgroundColor = '#f6eee9';
            document.body.style.padding = '0';
            document.body.style.margin = '0';
            document.body.style.height = '100%';
            document.body.style.width = '100%';
            document.body.style.overflowX = 'hidden';
        } else {
            // Reset to default styles or other page-specific styles
            document.body.style.backgroundColor = '';
            document.body.style.padding = '';
            document.body.style.margin = '';
            document.body.style.height = '';
            document.body.style.width = '';
            document.body.style.overflowX = '';
        }

        // Cleanup function to reset body style when component unmounts or route changes
        return () => {
            document.body.style.backgroundColor = '';
            document.body.style.padding = '';
            document.body.style.margin = '';
            document.body.style.height = '';
            document.body.style.width = '';
            document.body.style.overflowX = '';
        };
    }, [location.pathname]);

    const competences = [
        { nom: "HTML", pourcentage: "60%", icon: htmlIcon },
        {nom: "CSS", pourcentage: "50%", icon: cssIcon},
        {nom: "REACT", pourcentage: "50%", icon: reactIcon},
        {nom: "NodeJS", pourcentage: "50%", icon: nodeIcon},
        {nom: "VBA", pourcentage: "50%", icon: vbaIcon},
        {nom: "Bash", pourcentage: "50%", icon: bashIcon},
        {nom: "C#", pourcentage: "10%", icon: cSharpIcon},
        {nom: "SQL", pourcentage: "60%", icon: sqlIcon},
        {nom: "PHP", pourcentage: "40%", icon: PHP},
        
    ];
    const hobbies = [
        {nom: "Lecture", icon: bookIcon},
        {nom: "Cuisiner", icon: cookIcon},
        {nom: "Jeux Videos", icon: gamesIcon},
        {nom: "Photographie", icon: photoIcon},
    ]
    return(
        <>
<div className={styles.container}>
            <div className={styles.header}>
            <h1 className={styles.h1parcours}>Parcours</h1>
            </div>

            <div className={styles.Formations}>
                <h1 className={styles.h1formation}>Formation</h1>
                <div className={styles.formation}>
                <div className={styles.date}>
                <p>2017 - 2020</p>
                </div>
                <div className={styles.diplome}>
                    <h3 className={styles.h3formation}>Bac Scientifique</h3>
                    <p>Lycée Ronsard</p>
                </div>
                </div>


                <div className={styles.formation}>
                    <div className={styles.date}>
                    <p>2020 - 2022</p>
                    </div>
                    <div className={styles.diplome}>
                    <h3 className={styles.h3formation}>1ère et 2ème année de licence</h3>
                    <h3 className={styles.h3formation}>Histoire de l'art et d'archeologie</h3>
                    <p>Université Lyon II</p>
                    </div>
                </div>

                <div className={styles.formation}>
                    <div className={styles.date}>
                        <p>2022 - 2024</p>
                    </div>
                    <div className={styles.diplome}>
                    <h3 className={styles.h3formation}>BTS SIO Option SLAM</h3>
                    <p>Isitech</p>
                    </div>
                </div>
            </div>
            <div className={styles.Experiences}>

                <h1 className={styles.h1experience}>Expérience</h1>
                <div className={styles.experience}>
                    <div className={styles.date}>
                    <p>2022 - 2024</p>
                </div>
                    <div className={styles.diplome}>
                    <h3 className={styles.h2experience}>Concepteur developpeur</h3>
                    <p>CNAM</p>
                    </div>
                </div>
            </div>

            <div className={styles.cvAndSynthese}>
                <div className={styles.cv}>
                    <div className={styles.btn}>
                        <a href={cv} target="_blank" rel="noopener noreferrer">
                            <span>CV en PDF</span>
                        </a>
                </div>

                </div>
                <div className={styles.synthese}>
                <a href={syntese} target="_blank" >
                <button>Tableau de Synthese</button>
                </a>
                </div>
            </div>

            <div className={styles.containerCompetences}>
                <h1 className={styles.h1Competence}>Compétences</h1>
                <div className={styles.competences}  >
                    {competences.map((competence, index) => (
                        <div
                            key={index}
                            className={styles.competence}
                            style={{ '--progress-width': competence.pourcentage } as CustomCSSProperties}
                        >
                            <div className={styles.competenceIcon}>
                                <img src={competence.icon} alt={competence.nom} className={styles.icon} />
                            </div>
                            <div className={styles.competenceTitle}><strong>{competence.nom}</strong></div>
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
                <h1>Centre d'intérets</h1>
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
</div>
        </>
    )
}

export default Parcours;