import React from 'react';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <h1>Hello and welcome to my Portfolio</h1>
      </div>
      <div className={styles.intro}>
        <img src="/profile.jpeg" alt="Profile" className={styles.profileImage} />
        <div className={styles.introduction}>
          <p>
            I am a passionate programmer dedicated to creating innovative and efficient technological solutions.
            With varied experience in software development, mobile applications, and secure systems, I have gained
            in-depth expertise in programming and code optimization. My academic and professional journey has enabled
            me to master various programming languages and tools, such as Swift for iOS development, SQL Server for database
            management, and advanced concepts in cybersecurity.
          </p>
          <p>
            I am currently a programming student at Collège La Cité, where I strive to push my skills to a higher level.
            My development approach is based on principles of rigor, innovation, and optimization, with particular attention
            to integrating artificial intelligence into administrative processes to enhance the efficiency and ease of use
            of the applications I design.
          </p>
          <p>
            Explore my projects to discover my work and feel free to contact me for any collaboration or professional opportunity.
          </p>
          <p>Best regards,</p>
          <p><b>Rostane Fourar</b></p>
        </div>
      </div>
      <h2>Skills</h2>
      <div className={styles.skillsGrid}>
        <div>
          <h3>Programming Languages:</h3>
          <ul>
            <li>Swift</li>
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>SQL</li>
          </ul>
        </div>
        <div>
          <h3>Mobile Development:</h3>
          <ul>
            <li>iOS (Xcode, SwiftUI, UIKit)</li>
            <li>Android (Java, Kotlin)</li>
          </ul>
        </div>
        <div>
          <h3>Web Development:</h3>
          <ul>
            <li>HTML5, CSS3</li>
            <li>JavaScript (React, Angular, Vue.js)</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div>
          <h3>Databases:</h3>
          <ul>
            <li>SQL Server</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div>
          <h3>Cybersecurity:</h3>
          <ul>
            <li>Vulnerability Analysis</li>
            <li>Application Security</li>
            <li>Data Protection</li>
          </ul>
        </div>
        <div>
          <h3>Version Control Tools:</h3>
          <ul>
            <li>Git, GitHub, GitLab</li>
          </ul>
        </div>
        <div>
          <h3>Development Methodologies:</h3>
          <ul>
            <li>Agile (Scrum, Kanban)</li>
            <li>Object-Oriented Development</li>
            <li>Algorithm Design and Optimization</li>
          </ul>
        </div>
        <div>
          <h3>Design and Modeling:</h3>
          <ul>
            <li>UML (Use Case Diagrams, Class Diagrams)</li>
            <li>Database Design</li>
          </ul>
        </div>
        <div>
          <h3>AI Integration:</h3>
          <ul>
            <li>Machine Learning</li>
            <li>Natural Language Processing</li>
          </ul>
        </div>
        <div>
          <h3>Soft Skills:</h3>
          <ul>
            <li>Leadership and Team Management</li>
            <li>Effective Communication</li>
            <li>Problem Solving</li>
            <li>Adaptability and Continuous Learning</li>
          </ul>
        </div>
      </div>
      <p>
        These skills reflect my background and expertise in software development and programming, and demonstrate
        my ability to tackle complex projects with rigor and creativity.
      </p>
    </div>
  );
}

export default Home;
