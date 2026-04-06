export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer-sharum py-5 px-4 px-md-5 position-relative">

      {/* Blobs decorativos */}
      <div
        className="blob-deco"
        style={{ width: 300, height: 300, background: '#c0b49a', top: -80, right: '20%' }}
      />
      <div
        className="blob-deco"
        style={{ width: 200, height: 200, background: '#7b5e57', bottom: 20, left: '30%' }}
      />

      <div className="row align-items-center gy-5" style={{ position: 'relative', zIndex: 1 }}>

        {/* Logo */}
        <div className="col-12 col-md-4 d-flex flex-column align-items-start gap-2">
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-fire" style={{ fontSize: '3rem', color: '#e05c2a' }}></i>
            <div className="footer-logo-text">SHARUM</div>
          </div>
          <div className="line-brown mt-2" style={{ width: '80%' }} />
        </div>

        {/* Redes sociales */}
        <div className="col-12 col-md-4 text-center">
          <p className="fw-bold mb-3" style={{ letterSpacing: '0.1em' }}>SÍGUENOS</p>
          <div className="footer-social d-flex justify-content-center gap-2">
            <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" aria-label="X / Twitter"><i className="bi bi-twitter-x"></i></a>
            <a href="#" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
          </div>
        </div>

        {/* Contacto + scroll top */}
        <div className="col-12 col-md-4 d-flex flex-column align-items-end gap-3">
          <button onClick={scrollTop} className="btn-contact" style={{ borderRadius: '8px' }}>
            <i className="bi bi-arrow-up"></i>
          </button>
          <a href="mailto:contacto@sharum.co" className="btn-contact">
            CONTÁCTANOS <i className="bi bi-arrow-right"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="col-12 mt-3">
          <p className="footer-copy text-muted">
            © 2025 Sharum. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
