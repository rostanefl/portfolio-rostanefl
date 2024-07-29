import React from 'react';
import styles from '../styles/Contact.module.css';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    console.log('Form Data:', formDataObject);
  };

  return (
    <div className={styles.contact}>
      <h1 className={styles.heading}>Contact</h1>
      <div className={styles.contactCard}>
        <h2 className={styles.contactHeading}>Rostane Fourar</h2>
        <p className={styles.contactsParagraph}>Email: rostane@email.com</p>
        <p className={styles.contactsParagraph}>Phone: +1234567890</p>
        <p className={styles.contactsParagraph}>Address: 123 Example Street, City, Country</p>

        <h2  className={styles.contactHeading}>Get In Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">Your Name:</label>
            <input  type="text" className={styles.inputText} id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">Your Email:</label>
            <input  type="email" className={styles.inputEmail}  type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="message">Message:</label>
            <textarea className={styles.textarea} id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
