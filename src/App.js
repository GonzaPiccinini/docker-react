import './App.css';

function App() {
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
        <p>© 2026 OtakuVerse — Hecho con ❤️ para fans del anime</p>
      </footer>
    </div>
  );
}

export default App;
