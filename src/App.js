import './App.css';
import { useMemo } from 'react';

function App() {
  const petals = useMemo(
    () =>
      [...Array(20)].map(() => ({
        left: `${Math.random() * 100}%`,
        duration: `${6 + Math.random() * 5}s`,
        delay: `${Math.random() * 5}s`,
      })),
    [],
  );

  const particles = useMemo(
    () =>
      [...Array(15)].map(() => ({
        left: `${Math.random() * 100}%`,
        duration: `${8 + Math.random() * 10}s`,
        delay: `${Math.random() * 10}s`,
      })),
    [],
  );

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">OtakuVerse</h1>
        <div className="nav-links">
          <a href="#">Inicio</a>
          <a href="#">Animes</a>
          <a href="#">Mangas</a>
          <a href="#">Top 10</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="sakura-container">
          {petals.map((petal, i) => (
            <span
              key={i}
              className="petal"
              style={{
                left: petal.left,
                animationDuration: petal.duration,
                animationDelay: petal.delay,
              }}
            />
          ))}
        </div>

        <div className="hero-content">
          <h2>Explora el universo del anime y manga</h2>
          <p>
            Descubre nuevas historias, personajes épicos y mundos increíbles.
          </p>
          <button className="cta-btn">Comenzar</button>
        </div>

        {/* SVG decorativo */}
        <svg className="wave" viewBox="0 0 1440 320">
          <path
            fill="#0f0f1a"
            fillOpacity="1"
            d="M0,224L60,208C120,192,240,160,360,144C480,128,600,128,720,154.7C840,181,960,235,1080,234.7C1200,235,1320,181,1380,154.7L1440,128L1440,320L0,320Z"
          ></path>
        </svg>
      </section>

      <div className="particles">
        {particles.map((particle, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: particle.left,
              animationDuration: particle.duration,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* SECCIÓN ANIMES */}
      <section className="section">
        <h2>🔥 Trending Animes</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Shingeki no Kyojin</h3>
            <p>Acción, drama y titanes gigantes.</p>
          </div>
          <div className="card">
            <h3>Jujutsu Kaisen</h3>
            <p>Maldiciones, hechiceros y peleas épicas.</p>
          </div>
          <div className="card">
            <h3>One Piece</h3>
            <p>La aventura pirata más grande de la historia.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 OtakuVerse — Hecho con ❤️ para fans del anime y el manga</p>
      </footer>
    </div>
  );
}

export default App;
