import styles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.sectionTitle}>Contact</h2>

      {/* Skeleton form: prevents navigation but no network logic yet */}
      <form
        className={styles.contactForm}
        onSubmit={(e) => {
          e.preventDefault(); // skeleton only
        }}
        aria-label="Contact form"
      >
        <div className={styles.fieldRow}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" />
        </div>

        <div className={styles.fieldRow}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
          />
        </div>

        <div className={styles.fieldRow}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Write a short message..."
          />
        </div>

        <div className={styles.actions}>
          {/* For skeleton phase we keep a non-functional button */}
          <button type="submit" className={styles.submitBtn}>
            Send message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
