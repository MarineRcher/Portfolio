
// import css
import styles from "./../Style/Page/HomePage.module.css";

//import component menu / nav
import Nav from "../Component/Nav.tsx";

function HomePage() {
    return(
        <>
         <Nav />
                <div className={styles.containerName}>
                    <h1 className={styles.h1Name}>MARINE</h1>
                    <h1 className={styles.h1Name}>RICHER</h1>
                </div>


        </>
    )
}

export default HomePage;