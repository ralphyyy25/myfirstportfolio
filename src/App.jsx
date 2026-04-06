import "./App.css";

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <h1 className="logo">ralph.zxc</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <h2>Hello, I'm Ralph Lauren Te</h2>

        <img
          src="/rap2.jpg"
          alt="Ralph"
          className="profile-image"
        />

        <p>UI/UX Designer | MERN Stack</p>

        <button onClick={() => {
          document.getElementById("projects").scrollIntoView();
        }}>
          View My Work
        </button>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I’m a student who enjoys turning ideas into real web applications.
          I love learning new technologies and building projects that solve real-world problems.
        </p>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>

        <a href="#" className="card-link">
          <div className="project-card">
            <img src="/Frame129.png" alt="Commnect System" className="project-img" />
            <h3>Commnect System</h3>
            <p>A community announcement and support system using MERN stack.</p>
          </div>
        </a>

        <a href="#" className="card-link">
          <div className="project-card">
            <img src="/rap1.webp" alt="TechCare IT Services" className="project-img" />
            <h3>TechCare IT Services</h3>
            <p>IT solutions and technical support business concept.</p>
          </div>
        </a>

        <a href="#" className="card-link">
          <div className="project-card">
            <img src="/rap4.png" alt="Spotify Feature" className="project-img" />
            <h3>Toxic Till The End - Spotify Feature</h3>
            <p>A Spotify-inspired music interface for a song feature.</p>
          </div>
        </a>

        <a href="#" className="card-link">
          <div className="project-card">
            <img src="/rap3.jpg" alt="Colnago Bike Product" className="project-img" />
            <h3>Colnago Bike Product Page</h3>
            <p>A product showcase page with design and pricing details.</p>
          </div>
        </a>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Me</h2>

        <p>Email: ralphlauren.te@iloilonhs.edu.ph</p>
        <p>Phone: 09922430783</p>

        <p>
          Facebook:
          <a href="https://www.facebook.com/ralphlauren.te.25/" target="_blank" rel="noopener noreferrer">
            Ralph Lauren Te
          </a>
        </p>

        <p>
          GitHub:
          <a href="https://github.com/ralphyyy25" target="_blank" rel="noopener noreferrer">
            ralphyyy25
          </a>
        </p>

        <p>
          Instagram:
          <a href="https://instagram.com/ralphzxc_25" target="_blank" rel="noopener noreferrer">
            ralphzxc_25
          </a>
        </p>
      </section>

      <footer>
        <p>© 2026 ralphzxc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;