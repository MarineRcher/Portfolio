import linkedin from "./../assets/icons/linkedin.png";
import github from "./../assets/icons/github.png";
import email from "./../assets/icons/email.png";
// import css
import styles from "./../Style/Page/HomePage.module.css";

//import component menu / nav
import Nav from "../Component/Nav.tsx";

function HomePage() {
    return(
        <>
         <Nav />
            <div className={styles.containerIconsPresent}>
                <div className={styles.containerIcon}>
                    <div className={styles.icons}>
                        <img className={styles.icon} src={email}  />
                        <img className={styles.icon} src={linkedin}  />
                        <img className={styles.icon} src={github} />
                    </div>
                    <div className={styles.containerline}>
                    <div className={styles.line}>
                    </div></div>
                </div>
            <div className={styles.container}>
                <div className={styles.containerName}>
                    <h1 className={styles.h1Name}>MARINE RICHER</h1>
                </div>
                <div className={styles.containerContent}>
                    <h1>Je suis en BTS SIO option SLAM</h1>
                </div>
            </div>
            </div>
        </>
    )
}

export default HomePage;