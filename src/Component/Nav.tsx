import { Link, useLocation } from "react-router-dom";
import styles from "../Style/Component/Nav.module.css";

function Nav() {
    const location = useLocation();

    // Function to determine if the link is active
    const isActive = (path: string) => location.pathname === path;

    // Define your menu items
    const menuItems = [
        { path: "/", label: "Accueil" },
        { path: "/parcours", label: "Parcours" },
        { path: "/projets", label: "Projets" },
        { path: "/veille", label: "Veille technologique" },
        { path: "/alternance", label: "Alternance" }
    ];

    return (
        <div className={styles.nav}>
            {menuItems.map((menuItem, index) => (
                // Render menu item only if it's not active
                !isActive(menuItem.path) && (
                    <div key={index} className={styles.links}>
                        <Link to={menuItem.path} className={styles.link}>{menuItem.label}</Link>
                    </div>
                )
            ))}
        </div>
    );
}

export default Nav;
