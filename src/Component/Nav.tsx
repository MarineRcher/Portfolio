import styles from "../Style/Component/Nav.module.css";
import {Link} from "react-router-dom";


function Nav(){
    return(
        <>
            <div className={styles.nav}>
                <div className={styles.links}>
                <h1 className={styles.h1Name}>01</h1>
                <Link to="/parcours" className={styles.link}>Parcours</Link>
                </div>
                <div className={styles.links}>
                    <h1 className={styles.h1Name}>02</h1>
                <Link to="/projets" className={styles.link}>Projets</Link>
                </div>
                <div className={styles.links}>
                    <h1 className={styles.h1Name}>03</h1>
                <Link to="/veille" className={styles.link}>Veille technologique</Link>
                </div>
            </div>
        </>
    )
}

export default Nav;