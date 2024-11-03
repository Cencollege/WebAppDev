import { Link } from 'react-router-dom';

import styles from './Services.module.css';

function Services() {
  return (
    <section className={styles.services}>
      <div>
        <h1>Services</h1>
        <p>I offer the following services. Do contact me if you need more info. <Link to="/contact-me">Contact me!</Link></p>
      </div>
      <ul>
        <li>
          <p>General programming</p>
          <div><Link to='/contact-me'><img src="./images/general-programming.jpg" alt="Programe running on a screen" /></Link></div>
        </li>
        <li>
          <p>Web development</p>
          <div><Link to='/contact-me'><img src="./images/web-development.jpg"  alt="Web development background" /></Link></div>
        </li>
        <li>
          <p>Mobile Apps</p>
          <div><Link to='/contact-me'><img src="./images/mobile-app.jpg" alt="Mobile phones" /></Link></div>
        </li>
      </ul>
    </section>
  )
}

export default Services
