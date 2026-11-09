"use client";
const formations = [
  {
    icon: "💻",
    titre: "Informatique générale",
    description:
      "Apprenez les bases de l'informatique, la bureautique, les systèmes et la maintenance.",
  },
  {
    icon: "🌐",
    titre: "Réseaux informatiques",
    description:
      "Apprenez à installer, configurer et administrer des réseaux informatiques.",
  },
  {
    icon: "🤖",
    titre: "Intelligence artificielle",
    description:
      "Découvrez l'intelligence artificielle, le Machine Learning et Python.",
  },
  {
    icon: "⌨️",
    titre: "Développement Web",
    description:
      "Créez des sites web modernes avec HTML, CSS, JavaScript, PHP et Next.js.",
  },
  {
    icon: "📱",
    titre: "Applications mobiles",
    description:
      "Concevez des applications Android et mobiles modernes.",
  },
  {
    icon: "🖥️",
    titre: "Applications Desktop",
    description:
      "Développez des logiciels de bureau avec C#, Java et les bases de données.",
  },
  {
    icon: "⚙️",
    titre: "Génie logiciel",
    description:
      "Étudiez l'analyse, la conception, UML, les architectures et les tests logiciels.",
  },
  {
    icon: "🗄️",
    titre: "Bases de données",
    description:
      "Maîtrisez SQL, MySQL, la conception et l'administration des bases de données.",
  },
];
import { useEffect, useState } from "react";

function CurrentYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (year === null) return <>2026</>;

  return <>{year}</>;
}

export default function Home() {
  return (
    <>
      {/* NAVIGATION */}
      <header className="header">
        <nav className="container navbar">
          <a href="#accueil" className="logo">
            <span className="logo-icon">M</span>
            <span>MAKAS ACADÉMIE</span>
          </a>

          <div className="nav-links">
            <a href="#accueil">Accueil</a>
            <a href="#formations">Formations</a>
            <a href="#apropos">À propos</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="nav-button">
            Nous contacter ↗
          </a>
        </nav>
      </header>

      <main>

        {/* ACCUEIL */}
        <section className="hero" id="accueil">
          <div className="container hero-content">
            <span className="hero-label">
              CENTRE DE FORMATION PROFESSIONNELLE
            </span>

            <h1>
              Le numérique ouvre
              <br />
              la voie à <span>votre avenir.</span>
            </h1>

            <p>
              Développez vos compétences en informatique et
              technologies numériques. Apprenez, pratiquez
              et préparez-vous aux métiers de demain.
            </p>

            <div className="hero-buttons">
              <a href="#formations" className="btn-primary">
                Découvrir nos formations →
              </a>

              <a href="#apropos" className="btn-outline">
                Découvrir le centre
              </a>
            </div>

            <div className="hero-info">
              APPRENDRE • PRATIQUER • INNOVER
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="intro">
          <div className="container intro-content">
            <h2>
              Le savoir-faire numérique
              <br />
              <span>à portée de votre ambition.</span>
            </h2>

            <p>
              Des bases solides, des projets réels et un
              accompagnement pour transformer votre curiosité
              en compétence.
            </p>
          </div>
        </section>

        {/* FORMATIONS */}
        <section className="formations section" id="formations">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">
                NOS DOMAINES D'APPRENTISSAGE
              </span>

              <h2>
                Des formations pour
                <br />
                <span>aller plus loin.</span>
              </h2>

              <p>
                Découvrez nos différents domaines de formation
                et construisez votre avenir professionnel.
              </p>
            </div>

            <div className="formation-grid">
              {formations.map((formation, index) => (
                <article className="formation-card" key={formation.titre}>
                  <div className="card-top">
                    <span className="formation-icon">
                      {formation.icon}
                    </span>

                    <span className="card-number">
                      0{index + 1}
                    </span>
                  </div>

                  <h3>{formation.titre}</h3>

                  <p>{formation.description}</p>

                  <a href="#contact">
                    En savoir plus ↗
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PRESENTATION */}
        <section className="about section" id="apropos">
          <div className="container about-content">
            <div className="about-visual">
              <div className="about-symbol">
                {"</>"}
              </div>

              <span>TECHNOLOGIE • CRÉATIVITÉ • AVENIR</span>
            </div>

            <div className="about-text">
              <span className="section-label">
                QUI SOMMES-NOUS ?
              </span>

              <h2>
                Former aujourd'hui
                <br />
                les <span>talents de demain.</span>
              </h2>

              <p>
                Notre centre de formation professionnelle a
                pour mission de transmettre des compétences
                numériques pratiques et adaptées aux besoins
                des entreprises et du marché de l'emploi.
              </p>

              <p>
                Nous mettons l'accent sur la pratique,
                l'innovation, la créativité et la maîtrise
                des technologies modernes.
              </p>

              <div className="about-points">
                <div>
                  <strong>01</strong>
                  <span>Apprentissage pratique</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Encadrement professionnel</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Compétences numériques</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact section" id="contact">
          <div className="container contact-content">
            <div>
              <span className="section-label">
                RESTONS EN CONTACT
              </span>

              <h2>
                Construisons
                <br />
                <span>votre avenir.</span>
              </h2>

              <p>
                Vous souhaitez vous inscrire ou obtenir des
                informations sur nos formations ?
                Notre équipe est à votre disposition.
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-item">
                <span>✉</span>
                <div>
                  <small>E-MAIL</small>
                  <a href="mailto:contact@centre.com">
                    contact@centre.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span>☎</span>
                <div>
                  <small>TÉLÉPHONE</small>
                  <p>+243 XXX XXX XXX</p>
                </div>
              </div>

              <div className="contact-item">
                <span>⌖</span>
                <div>
                  <small>LOCALISATION</small>
                  <p>Goma, Nord-Kivu, République démocratique du Congo</p>
                </div>
              </div>
              <div className="contact-item">
                <span>⌖</span>
                  <div>
                    <small>ADRESSE</small>
                    <p>
                    Goma, quartier Turunga, N° 225,
                    territoire de Nyiragongo,
                    Nord-Kivu, RDC.
                </p>
                  </div>
                
              </div>

              <a
                href="mailto:contact@centre.com"
                className="btn-primary contact-button"
              >
                Nous écrire →
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* PIED DE PAGE */}
      <footer className="footer">
        <div className="container footer-content">
          <a href="#accueil" className="logo">
            <span className="logo-icon">M</span>
            MAKAS ACADÉMIE
          </a>

         <p>
            © <CurrentYear /> MAKAS ACADÉMIE.
            Tous droits réservés.
        </p>

          <a href="#accueil">Retour en haut ↑</a>
        </div>
      </footer>
    </>
  );
}