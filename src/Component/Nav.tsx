import styles from "../Style/Component/Nav.module.css";
import {Link} from "react-router-dom";


function Nav(){
    return(
        <>
            <div className={styles.nav}>
                <Link to="/parcours" className={styles.link}>Parcours</Link>
                <Link to="/projets" className={styles.link}>Projets</Link>
                <Link to="/competences" className={styles.link}>Grille de compétences</Link>
                <Link to="/veille" className={styles.link}>Veille technologique</Link>
            </div>
        </>
    )
}

export default Nav;