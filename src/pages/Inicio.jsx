import Footer from '../components/Footer';

// ── Assets de Figma (válidos ~7 días) ────────────────────────────────────────
const vinylImg = 'https://www.figma.com/api/mcp/asset/9e229d56-2b6b-4dd0-89e2-810d589ef59c';
const comicBg  = 'https://www.figma.com/api/mcp/asset/435fac02-f258-4efb-9c1d-cac6b878739b';
const songImg1 = 'https://www.figma.com/api/mcp/asset/5501a7a9-7382-4f0a-8481-7f58318de50b';
const songImg2 = 'https://www.figma.com/api/mcp/asset/3a82fec7-7933-43c0-ab30-3ce986b579fb';
const songImg3 = 'https://www.figma.com/api/mcp/asset/6ff9d2ed-3711-4f90-bed6-2f4dd15d0961';

const playlist = [
  { img: songImg1, title: 'Underneath Your Clothes',       sub: 'Creado por Shakira.' },
  { img: songImg2, title: 'Loba',                          sub: 'Creado por Shakira.' },
  { img: songImg3, title: 'Suerte (Whenever, Wherever)',   sub: 'Creado por Shakira.' },
];

export default function Inicio() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="section-hero py-5">
        <div className="container-xl py-4">
          <div className="row align-items-center gy-5">

            {/* Vinyl */}
            <div className="col-12 col-md-3 d-flex justify-content-center">
              <img src={vinylImg} alt="Vinyl" className="vinyl-img" />
            </div>

            {/* Texto central */}
            <div className="col-12 col-md-5 text-center">
              <h1 className="hero-title mb-4">HUELLAS DE RITMO</h1>
              <p className="hero-text mx-auto mb-4">
                Huellas de ritmo es un cómic interactivo transmedia creado por Sharum que narra la
                historia de Isabel, una niña prodigiosa en el baile que vive en una isla junto a su
                pueblo. Este lugar enfrenta el desafío de olvidar su herencia musical, lo cual afecta
                profundamente al guardián del pueblo.
              </p>
              <p className="hero-text mx-auto" style={{ fontSize: '0.95rem', color: '#555' }}>
                Un cómic inspirado en la cantante colombiana SHAKIRA, su amor, expresión y talento
                por la música y el baile.
              </p>
            </div>

            {/* Playlist */}
            <div className="col-12 col-md-4">
              <h2 className="playlist-title mb-4 text-center">Playlist</h2>
              {playlist.map((s, i) => (
                <div className="playlist-card" key={i}>
                  <img src={s.img} alt={s.title} />
                  <div>
                    <p className="song-title mb-1">{s.title}</p>
                    <p className="song-sub mb-0">{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── COMIC BANNER ────────────────────────────────────────── */}
      <section className="comic-section" style={{ minHeight: 580 }}>
        <img src={comicBg} alt="Comic background" className="comic-bg" />
        <div className="comic-overlay px-3">
          <h2 className="mb-0">HUELLAS DE</h2>
          <h2 className="mb-4">RITMO</h2>
          <button className="btn-comic">Iniciar Comic</button>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <Footer />
    </>
  );
}
