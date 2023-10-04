
// import css
import styles from "./../Style/Page/HomePage.module.css";

//import component menu / nav
import Nav from "../Component/Nav.tsx";

function HomePage() {
    return(
        <>
         <Nav />
            <div className={styles.container}>
                <div className={styles.containerName}>
                    <h1>MARINE RICHER</h1>
                </div>
                <div className={styles.containerContent}>
                    <h1>BTS SIO option SLAM</h1>
                </div>
            </div>
        </>
    )
}

export default HomePage;