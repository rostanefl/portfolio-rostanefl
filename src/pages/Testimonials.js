import React from 'react';
import styles from '../styles/Testimonials.module.css';

const testimonialsData = [
  {
    name: "Jack Dean",
    position: "CEO of Tech Corp",
    testimonial: "This portfolio website is incredibly professional and has helped me showcase my work effectively. Highly recommended!"
  },
  {
    name: "Jane Smith",
    position: "Owner of Gourmet Diner",
    testimonial: "The restaurant website has boosted our online presence and made reservations a breeze for our customers. Fantastic work!"
  },
  {
    name: "Mike Johnson",
    position: "Manager at BuildIt Construction",
    testimonial: "Our new website has been a game-changer for our business. The project galleries and client testimonials have really helped attract new clients."
  }
];

function Testimonials() {
  return (
    <div className={styles.testimonials}>
      <h1>Testimonials</h1>
      {testimonialsData.map((testimonial, index) => (
        <div key={index} className={styles.testimonialCard}>
          <h2>{testimonial.name}</h2>
          <h3>{testimonial.position}</h3>
          <p>"{testimonial.testimonial}"</p>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
