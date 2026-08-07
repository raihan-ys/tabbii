import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
   <div style={{ fontFamily: "Inter, sans-serif" }}>
      
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#761f14" }}>
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Tabbii</a>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="nav" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Features</a></li>
              <li className="nav-item"><a className="nav-link" href="#">How it Works</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Cases</a></li>
              <li className="nav-item">
                <a className="btn btn-light ms-3 fw-semibold" href="#">Try Now</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="py-5 text-white" style={{ backgroundColor: "#000" }}>
        <div className="container text-center">
          <h1 className="display-5 fw-bold">
            Understand Your Pet’s Health <br /> Through AI Narratives
          </h1>
          <p className="lead mt-3">
            Tabbii transforms symptoms into structured case stories, helping you
            track, understand, and act with confidence.
          </p>

          <div className="mt-4">
            <button className="btn btn-light btn-lg me-3 fw-semibold">
              Start a Case
            </button>
            <button className="btn btn-outline-light btn-lg">
              View Demo
            </button>
          </div>

          <div className="mt-5">
            <img src="" alt="Hero Preview" className="img-fluid rounded shadow" />
            {/* 
              Gambar yang dibutuhkan:
              - Mockup dashboard Tabbii
              - Menampilkan AI summary, timeline, dan status kesehatan
              - Bisa berupa laptop screen dengan UI aplikasi
            */}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">What Makes Tabbii Different</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="fw-bold">AI Case Narratives</h5>
              <p>
                Turn symptoms into structured, readable case reports—not just chat responses.
              </p>
            </div>

            <div className="col-md-4">
              <h5 className="fw-bold">Smart Follow-Up Questions</h5>
              <p>
                AI asks relevant questions to refine understanding of your pet’s condition.
              </p>
            </div>

            <div className="col-md-4">
              <h5 className="fw-bold">Urgency Awareness</h5>
              <p>
                Know when to monitor, act soon, or visit a vet immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5">How It Works</h2>

          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <h5 className="fw-bold">1. Input Symptoms</h5>
              <p>
                Enter your pet’s behavior, eating habits, and symptoms in a simple form.
              </p>
            </div>
            <div className="col-md-6">
              <img src="" className="img-fluid rounded" alt="Input" />
              {/* 
                Gambar:
                - UI form input data hewan
                - field seperti nama, gejala, aktivitas
              */}
            </div>
          </div>

          <div className="row align-items-center mb-5 flex-md-row-reverse">
            <div className="col-md-6">
              <h5 className="fw-bold">2. AI Builds Your Case</h5>
              <p>
                Tabbii generates a full narrative with timeline, patterns, and concerns.
              </p>
            </div>
            <div className="col-md-6">
              <img src="" className="img-fluid rounded" alt="AI Analysis" />
              {/* 
                Gambar:
                - Tampilan AI analysis
                - Menampilkan summary, timeline, dan insight
              */}
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-6">
              <h5 className="fw-bold">3. Track Over Time</h5>
              <p>
                Update your case and see how your pet’s condition evolves.
              </p>
            </div>
            <div className="col-md-6">
              <img src="" className="img-fluid rounded" alt="Timeline" />
              {/* 
                Gambar:
                - Timeline kesehatan
                - perubahan kondisi dari hari ke hari
              */}
            </div>
          </div>
        </div>
      </section>

      {/* USE CASE */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Real-Life Use Case</h2>
          <p className="mb-5">
            “My cat started vomiting occasionally. Tabbii helped me track patterns 
            and realize it happened after certain meals.”
          </p>

          <div>
            <img src="" className="img-fluid rounded shadow" alt="Case Example" />
            {/*
              Gambar:
              - contoh hasil output AI (case report)
              - terlihat seperti laporan profesional ringan
            */}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 text-white text-center" style={{ backgroundColor: "#761f14" }}>
        <div className="container">
          <h2 className="fw-bold">Start Understanding Your Pet Today</h2>
          <p className="mt-3">
            Build your first AI-powered health case in seconds.
          </p>

          <button className="btn btn-light btn-lg mt-3 fw-semibold">
            Try Tabbii Now
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-4 text-center text-white" style={{ backgroundColor: "#000" }}>
        <div className="container">
          <p className="mb-0">© 2026 Tabbii. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}

export default App
