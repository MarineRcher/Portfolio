import { useEffect } from 'react';
import styles from "./../Style/Page/HomePage.module.css";
import { useLocation } from "react-router-dom";
import fond from './../assets/fond.jpg';
function HomePage() {
    const location = useLocation();

    // Function to determine if the route is active
    const isActive = (path: string) => location.pathname === path;

    useEffect(() => {
        // Update body styles based on the active route
        if (isActive("/")) {
            document.body.style.padding = '0';
            document.body.style.margin = '0';
            document.body.style.height = '100%';
            document.body.style.width = '100%';
            document.body.style.overflowX = 'hidden';
            document.body.style.backgroundImage = `url(${fond})`;
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundAttachment = 'fixed';
            document.body.style.fontFamily = "'Notable', sans-serif";
        } else {
            // Reset body styles if not on the home page
            document.body.style.padding = '';
            document.body.style.margin = '';
            document.body.style.height = '';
            document.body.style.width = '';
            document.body.style.overflowX = '';
            document.body.style.backgroundImage = '';
            document.body.style.backgroundRepeat = '';
            document.body.style.backgroundSize = '';
            document.body.style.backgroundAttachment = '';
            document.body.style.fontFamily = '';
        }

        // Cleanup function to reset styles when component unmounts or path changes
        return () => {
            document.body.style.padding = '';
            document.body.style.margin = '';
            document.body.style.height = '';
            document.body.style.width = '';
            document.body.style.overflowX = '';
            document.body.style.backgroundImage = '';
            document.body.style.backgroundRepeat = '';
            document.body.style.backgroundSize = '';
            document.body.style.backgroundAttachment = '';
            document.body.style.fontFamily = '';
        };
    }, [location.pathname]); // Depend on the pathname to re-run the effect when it changes

    return (
        <>
            <div className={styles.containerName}>
                <h1 className={styles.h1Name}>MARINE</h1>
                <h1 className={styles.h1Name}>RICHER</h1>
            </div>
        </>
    );
}

export default HomePage;
