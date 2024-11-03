import { Link } from "react-router-dom";

import styles from './About.module.css';


function About() {
  return (
    <section className={styles.about}>
      <div>
        <div>
          <h2>Monica<br /> Ortiz</h2>
          <p>FULLSTACK WEB DEVELOPER</p>
        </div>
        <div>
          <blockquote>
            <cite>
              <p>
                "Through my work, I aim to bring creative ideas to life, bridging functionality and design to deliver impactful digital experiences."
              </p>
            </cite>
          </blockquote>
          <p>
            I am currently a student of software engineering at Centennial College in the pursuit of career in cybersecurity.
            I have a chemistry background and work experience in the pharmaceutical industry.
            Having strong transferable skills has made the transition of changing careers easier.
            I enjoy this new learning experience and feel confident of what I can achieve at a personal and professional level.
          </p>
          <p>
            I believe that great design is about more than just visuals; it's about creating an experience.
          </p>
          <p>
            <a href="/contact-me">Get in touch to learn more!</a>
          </p>
        </div>
        <div>
          <p>SELECTED WORK</p>
          <ul>
            <li><Link to="/services">Programming</Link></li>
            <li><Link to="/services">Web Development</Link></li>
            <li><Link to="/services">Mobile App</Link></li>
          </ul>
        </div>
      </div>
      <div>
        <a href="/contact-me"><img src="./images/profile.jpg" alt="Monica's Profile headshot" /></a>
      </div>
    </section>
  )
}

export default About
