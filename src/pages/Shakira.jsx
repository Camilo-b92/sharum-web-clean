import { useState } from 'react';
import Footer from '../components/Footer';

// ── Assets de Figma ──────────────────────────────────────────────────────────
const collajeImg    = 'https://www.figma.com/api/mcp/asset/4acd9c0e-5f7a-4e85-8f68-abcfcd80b4cd';
const personajesBg  = 'https://www.figma.com/api/mcp/asset/d1f8a4b9-88c7-4981-b583-f0c8ab4d62f7';
const shakiraCard   = 'https://www.figma.com/api/mcp/asset/ec5b1b3d-61fd-4115-b659-b3847dbd29e4';
const loboCard      = 'https://www.figma.com/api/mcp/asset/98c4ecb7-bfde-410a-b32a-2aee29351471';
const oscuridadCard = 'https://www.figma.com/api/mcp/asset/fbaef286-c3fe-4155-8228-9c107674de91';

const personajes = [
  { name: 'LOBO', img: oscuridadCard },
  { name: 'SHAKIRA',   img: shakiraCard   },
  { name: 'Oscuridad',      img: loboCard      },
];

export default function Shakira() {
  const [active, setActive] = useState(1); // índice central

  const prev = () => setActive(i => (i - 1 + personajes.length) % personajes.length);
  const next = () => setActive(i => (i + 1) % personajes.length);
  const getIdx = offset => (active + offset + personajes.length) % personajes.length;

  return (
    <>
      {/* ── SOBRE SHAKIRA ───────────────────────────────────────── */}
      <section className="sobre-shakira-section py-5">
        <div className="container-xl">

          {/* Encabezado */}
          <div className="d-flex align-items-center gap-3 mb-5 justify-content-center">
            <h2 className="section-title-bar mb-0">SOBRE SHAKIRA</h2>
            <div className="line-brown" />
          </div>

          {/* Collage + texto */}
          <div className="row align-items-center gy-5">
            <div className="col-12 col-md-7">
              <img src={collajeImg} alt="Collage Shakira" className="collage-img" />
            </div>
            <div className="col-12 col-md-5 d-flex flex-column align-items-center">
              <p className="shakira-desc">
                Shakira es esa energía única que une y emociona. La forma distintiva de moverse de
                Shakira —una fusión de danza latina con elementos del belly dance árabe— se convirtió
                en el arquetipo para Isabel, quien lleva esa pasión y ritmo en cada paso, al igual
                que su ícono contemporáneo. Shakira lo ha logrado mundialmente con sus movimientos
                únicos, que expresan alegría, identidad y cultura.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── PERSONAJES ──────────────────────────────────────────── */}
      <section className="personajes-section">
        <img src={personajesBg} alt="Fondo Personajes" className="personajes-bg" />

        <div className="personajes-overlay position-relative">
          <h2
            className="text-center text-white fw-bold mb-5"
            style={{ letterSpacing: '0.1em', fontSize: '2rem' }}
          >
            PERSONAJES
          </h2>

          <div className="container-xl position-relative" style={{ minHeight: 540 }}>
            {/* Flechas */}
            <button className="carousel-arrow left" onClick={prev} aria-label="Anterior">
              <i className="bi bi-chevron-left"></i>
            </button>
            <button className="carousel-arrow right" onClick={next} aria-label="Siguiente">
              <i className="bi bi-chevron-right"></i>
            </button>

            <div className="row justify-content-center align-items-center" style={{ gap: 0 }}>
              {/* Tarjeta izquierda */}
              <div className="col-3 col-md-3">
                <div className="personaje-card side" onClick={prev}>
                  <img src={personajes[getIdx(-1)].img} alt={personajes[getIdx(-1)].name} />
                  <span className="card-label">{personajes[getIdx(-1)].name}</span>
                </div>
              </div>

              {/* Tarjeta central */}
              <div className="col-5 col-md-4">
                <div className="personaje-card active">
                  <img src={personajes[active].img} alt={personajes[active].name} />
                  <span className="card-label">{personajes[active].name}</span>
                </div>
              </div>

              {/* Tarjeta derecha */}
              <div className="col-3 col-md-3">
                <div className="personaje-card side" onClick={next}>
                  <img src={personajes[getIdx(1)].img} alt={personajes[getIdx(1)].name} />
                  <span className="card-label">{personajes[getIdx(1)].name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <Footer />
    </>
  );
}
