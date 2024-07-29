import React from 'react';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <h1>Bonjour et bienvenue sur mon Portfolio</h1>
      </div>
      <div className={styles.intro}>
        <img src="/profile.jpeg" alt="Profile" className={styles.profileImage} />
        <div className={styles.introduction}>
          <p>
            Je suis un programmeur passionné par la création de solutions technologiques innovantes et efficaces.
            Fort d'une expérience variée dans le développement de logiciels, d'applications mobiles et de systèmes sécurisés,
            j'ai acquis une expertise approfondie en matière de programmation et d'optimisation de code. Mon parcours académique
            et professionnel m'a permis de maîtriser divers langages de programmation et outils, tels que Swift pour le développement
            iOS, SQL Server pour la gestion de bases de données, et les concepts avancés en cybersécurité.
          </p>
          <p>
            Je suis actuellement étudiant en programmation au Collège La Cité, où je m'efforce de pousser mes compétences à un niveau supérieur.
            Mon approche du développement repose sur des principes de rigueur, d'innovation et d'optimisation, avec une attention particulière à
            l'intégration de l'intelligence artificielle dans les processus administratifs pour améliorer l'efficacité et la facilité d'utilisation
            des applications que je conçois.
          </p>
          <p>
            Explorez mes projets pour découvrir mon travail et n'hésitez pas à me contacter pour toute collaboration ou opportunité professionnelle.
          </p>
          <p>Cordialement,</p>
          <p><b>Rostane Fourar</b></p>
        </div>
      </div>
      <h2>Skills</h2>
      <div className={styles.skillsGrid}>
        <div>
          <h3>Langages de programmation :</h3>
          <ul>
            <li>Swift</li>
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>SQL</li>
          </ul>
        </div>
        <div>
          <h3>Développement mobile :</h3>
          <ul>
            <li>iOS (Xcode, SwiftUI, UIKit)</li>
            <li>Android (Java, Kotlin)</li>
          </ul>
        </div>
        <div>
          <h3>Développement web :</h3>
          <ul>
            <li>HTML5, CSS3</li>
            <li>JavaScript (React, Angular, Vue.js)</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div>
          <h3>Bases de données :</h3>
          <ul>
            <li>SQL Server</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div>
          <h3>Cybersécurité :</h3>
          <ul>
            <li>Analyse des vulnérabilités</li>
            <li>Sécurisation des applications</li>
            <li>Protection des données</li>
          </ul>
        </div>
        <div>
          <h3>Outils de gestion de versions :</h3>
          <ul>
            <li>Git, GitHub, GitLab</li>
          </ul>
        </div>
        <div>
          <h3>Méthodologies de développement :</h3>
          <ul>
            <li>Agile (Scrum, Kanban)</li>
            <li>Développement orienté objet</li>
            <li>Conception et optimisation d'algorithmes</li>
          </ul>
        </div>
        <div>
          <h3>Conception et modélisation :</h3>
          <ul>
            <li>UML (Use Case Diagrams, Class Diagrams)</li>
            <li>Design de bases de données</li>
          </ul>
        </div>
        <div>
          <h3>Intégration de l'IA :</h3>
          <ul>
            <li>Apprentissage automatique</li>
            <li>Traitement du langage naturel</li>
          </ul>
        </div>
        <div>
          <h3>Soft skills :</h3>
          <ul>
            <li>Leadership et gestion d'équipe</li>
            <li>Communication efficace</li>
            <li>Résolution de problèmes</li>
            <li>Adaptabilité et apprentissage continu</li>
          </ul>
        </div>
      </div>
      <p>
        Ces compétences reflètent mon parcours et mon expertise en développement de logiciels et en programmation, et démontrent
        ma capacité à aborder des projets complexes avec rigueur et créativité.
      </p>
    </div>
  );
}

export default Home;
