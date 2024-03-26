
import styles from "../Style/Page/veille.module.css";

import home from "../assets/home.png";
import {Link} from "react-router-dom";

import veille from "../Documents/veille.pdf";
function Veille() {
    return(
        <>
            <div className={styles.containerTitleVT}>


                    <h1 className={styles.h1TitleVT}>Veille Technologique</h1>
                    <div className={styles.between}></div>
                    <Link to="/" className={styles.link}>
                        <img src={home} alt={home} className={styles.homePage}/>
                    </Link>
            </div>
            <div className={styles.containerContent}>
                <a href={veille} target="_blank" rel="noopener noreferrer">
                    <button className={styles.button}>Veille Technologique en PDF</button>
                </a>
            </div>



        </>
    )
}

export default Veille;