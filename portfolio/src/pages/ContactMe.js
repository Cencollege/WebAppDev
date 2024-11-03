import styles from "./ContactMe.module.css";

function ContactMe() {
  return (
    <section className={styles.contact}>
      <div>
        <h2>Contact Me</h2>
      </div>
      <form name="cOrder" method="post" action="cgi/process_form.cgi">
        <div>
          <div>
            <label htmlFor="fName">First Name *</label>
            <input id="fName" type="text" name="fName" required />
          </div>
          <div>
            <label htmlFor="lName">Last Name *</label>
            <input id="lName" type="text" name="lName" required />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="email">Email *</label>
            <input id="email" type="email" name="email" required />
          </div>
          <div>
            <label className={`${styles.alert} ${styles.phone}`} htmlFor="phone">
              <span><ion-icon name="alert-circle-outline"></ion-icon></span>
              Phone Number *
              <p>Phone number must be 10 digits</p>
            </label>
            <input id="phone" type="tel" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required />
          </div>
        </div>
        <div>
          <label htmlFor="message">Message *</label>
          <textarea id="message" type="text" name="message" maxlength="500" required></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </section>
  )
}

export default ContactMe
