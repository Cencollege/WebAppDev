import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

function Footer() {

  return (
    <footer className={styles.footerCtn}>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact-me">Contact me</Link></li>
            <li><Link to="/about-me">About me</Link></li>
          </ul>
        </nav>
        <div>
          <p>&copy; IT4SmallBusinesses 2024. All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer
