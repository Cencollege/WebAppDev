import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Logo from './Logo'

function Header() {
  return (
    <header>
      <nav className={styles.headerCtn}>
        <Logo />
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/projects"}>Projects</Link></li>
          <li><Link to={"/services"}>Services</Link></li>
          <li><Link to={"/contact-me"}>Contact me</Link></li>
          <li><Link to={"/about-me"}>About me</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
