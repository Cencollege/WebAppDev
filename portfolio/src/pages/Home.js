import styles from './Home.module.css';

function Home() {
  return (
    <section className={styles.homeCtn}>
      <div>
        <h1>Welcome!!!</h1>
        <div>
          <p>This website has been created as part of my portfolio to showcase the skills acquired so far in my learning journey of software engineering.</p>
          <p>My mission is to help small businesses to grow with curated websites that will promote their services, increase their competitiveness, and reach a broader audience.</p>
          <p>I hope navigating through it not only gives you a grasp of my professional skills, but also a sense of who I am.</p>
          <i>Thank you for stopping by…</i>
        </div>
      </div>
    </section>
  )
}

export default Home
