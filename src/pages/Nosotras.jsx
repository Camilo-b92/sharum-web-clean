import { useState } from 'react';
import Footer from '../components/Footer';

// ── Fotos del equipo (carpeta /public) ───────────────────────────────────────
const teamPhoto1 = '/Mafe.jpg';
const teamPhoto2 = '/Caro.png';
const teamPhoto3 = '/Mishi.png';
const bannerLeft  = 'https://www.figma.com/api/mcp/asset/86ab9081-0659-474a-b377-5ac277f89529';
const bannerRight = 'https://www.figma.com/api/mcp/asset/550e41b2-eb90-42f2-96a8-b24396f50683';
const sharuLogo = '/logo.png';
const iconMision   = '/Iconos de Mensajes.png';
const iconPropósito = '/Signo de Interrogacion.png';
const iconVision   = '/Ojo.png';

// ── Datos ─────────────────────────────────────────────────────────────────────
const propositos = [
  {
    icon: iconMision,
    title: 'Misión',
    text: 'Preservar y reavivar la música y las tradiciones de la comunidad colombiana por medio de una narrativa fantástica, mostrando cómo la voz, el canto y la danza pueden revivir el espíritu colectivo y restablecer la armonía cultural.',
  },
  {
    icon: iconPropósito,
    title: '¿Cuál Es Nuestro Propósito?',
    text: 'Preservar la música y las tradiciones culturales como elementos vivos e esenciales de la identidad colectiva, utilizando el relato fantástico como vehículo para que el canto y el baile permanezcan presentes y valiosos en la memoria de la comunidad.',
  },
  {
    icon: iconVision,
    title: 'Visión',
    text: 'Inspirar en el presente y en el futuro el reconocimiento de la música como fuerza vital de identidad y unión, motivando a la comunidad colombiana a valorar sus tradiciones como pilares de alegría, resistencia y pertenencia.',
  },
];

const team = [
  {
    img: teamPhoto1,
    nickname: 'mafe',
    name: 'Maria Fernanda',
    bio: 'Tengo 18 años, soy una estudiante muy proactiva, que disfruta aprender, colaborar y crear con propósito. Para mí, lo más importante es trabajar con pasión y autenticidad en todo lo que hago.',
  },
  {
    img: teamPhoto2,
    nickname: 'Caro',
    name: 'Carolina González',
    bio: 'Tengo 19 años, soy una estudiante con energía, enfoque y visión, me gusta trabajar en equipo para construir marcas que dejen huella. Cada proyecto es una oportunidad para crecer y sumar valor.',
  },
  {
    img: teamPhoto3,
    nickname: 'mishi',
    name: 'Jimena Hernández',
    bio: 'Tengo 20 años, soy una estudiante apasionada por contar historias que conectan. Creo en las ideas que inspiran y en los equipos que las hacen realidad. Siempre buscando el equilibrio entre creatividad y estrategia.',
  },
];

// ── Modal de integrante ───────────────────────────────────────────────────────
function MemberModal({ member, onClose }) {
  if (!member) return null;
  return (
    <div className="nos-modal-backdrop" onClick={onClose}>
      <div className="nos-modal-card" onClick={e => e.stopPropagation()}>
        <div className="nos-modal-photo-wrap">
          <img src={member.img} alt={member.name} className="nos-modal-photo" />
        </div>
        <div className="nos-modal-quote-icon">
          <i className="bi bi-quote"></i>
        </div>
        <p className="nos-modal-bio">{member.bio}</p>
        <div className="nos-modal-name-row">
          <span className="nos-modal-name">{member.name}</span>
        </div>
        <button className="nos-modal-close" onClick={onClose} aria-label="Cerrar">
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
    </div>
  );
}

// ── Página Nosotras ───────────────────────────────────────────────────────────
export default function Nosotras() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      {/* ── PROPÓSITOS ─────────────────────────────────────────────── */}
      <section className="nos-propositos-section py-5">
        <div className="container-xl py-3">
          <h2 className="nos-section-title text-center mb-5">Propósitos</h2>
          <div className="nos-propositos-box">
            <div className="nos-deco-blob nos-deco-right" aria-hidden="true" />
            <div className="row gy-5 text-center" style={{ position: 'relative', zIndex: 1 }}>
              {propositos.map((p, i) => (
                <div className="col-12 col-md-4" key={i}>
                  <div className="nos-prop-circle mb-3">
                    <img src={p.icon} alt={p.title} className="nos-prop-icon" />
                  </div>
                  <h3 className="nos-prop-title mb-3">{p.title}</h3>
                  <p className="nos-prop-text">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SOBRE NOSOTRAS ─────────────────────────────────────────── */}
      <section className="nos-sobre-section py-5">
        <div className="container-xl py-3">
          <div className="d-flex align-items-center gap-3 mb-5">
            <h2 className="nos-heading-bar mb-0 text-nowrap">SOBRE NOSOTRAS.</h2>
            <div className="line-brown flex-grow-1" />
            <i className="bi bi-star-fill" style={{ color: 'var(--sand)', fontSize: '1.4rem' }} />
          </div>
          <div className="row gy-4 justify-content-center">
            {team.map((m, i) => (
              <div className="col-12 col-sm-6 col-md-4" key={i}>
                <div
                  className="nos-team-card"
                  onClick={() => setActiveModal(m)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && setActiveModal(m)}
                  aria-label={`Ver perfil de ${m.name}`}
                >
                  <div className="nos-team-photo-wrap">
                    <img src={m.img} alt={m.name} className="nos-team-photo" />
                  </div>
                  <div className="nos-team-overlay">
                    <span className="nos-team-nickname">{m.nickname}</span>
                    <span className="nos-team-click-hint">
                      <i className="bi bi-cursor-fill me-1"></i> Click para ver
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS / MARCA ──────────────────────────────────── */}
      <section className="nos-marca-section py-5">
        <div className="container-xl py-3">
          <div className="text-center mb-5">
            <img src={sharuLogo} alt="Sharum Logo" className="nos-brand-logo mb-3" />
            <div className="nos-brand-name">SHARUM</div>
          </div>
          <div className="row align-items-center gy-5 mb-5">
            <div className="col-12 col-md-5">
              <div className="nos-banner-rounded" style={{ backgroundImage: `url(${bannerLeft})` }} />
            </div>
            <div className="col-12 col-md-7 text-center text-md-start">
              <h3 className="nos-marca-heading mb-3">¿QUIÉNES SOMOS?</h3>
              <p className="nos-marca-text">
                SHARUM es una marca enfocada para dar a recordar el legado musical, la cual con tanta
                estima creó <strong>"Huellas de ritmo"</strong>, un cómic interactivo cuyo principal
                propósito es hablar indirectamente sobre cómo las costumbres se van perdiendo poco a poco.
              </p>
            </div>
          </div>
          <div className="row align-items-center gy-5">
            <div className="col-12 col-md-7 text-center text-md-start">
              <h3 className="nos-marca-heading mb-3">NUESTRO EQUIPO</h3>
              <p className="nos-marca-text">
                Somos 3 estudiantes del SENA cuyo proyecto fue la creación de una marca y de un cómic
                digital interactivo transmedia basado en un cantante que haya marcado la historia colombiana.
              </p>
            </div>
            <div className="col-12 col-md-5">
              <div className="nos-banner-rounded" style={{ backgroundImage: `url(${bannerRight})` }} />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <MemberModal member={activeModal} onClose={() => setActiveModal(null)} />
    </>
  );
}
