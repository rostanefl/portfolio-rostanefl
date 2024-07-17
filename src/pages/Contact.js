import React from 'react';
import styles from '../styles/Contact.module.css';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // For demonstration purposes, you can console log the form data
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    console.log('Form Data:', formDataObject);
    // You can add further logic to handle form submission (e.g., send data to server)
  };

  return (
    <div className={styles.contact}>
      <h1>Contact</h1>
      <div className={styles.contactCard}>
        <h2>Rostane Fourar</h2>
        <p>Email: rostane@email.com</p>
        <p>Phone: +1234567890</p>
        <p>Address: 123 Example Street, City, Country</p>

        <h2>Get In Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
