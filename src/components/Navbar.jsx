import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar-sharum d-flex align-items-center justify-content-between px-4 px-md-5">

      {/* Logo / Brand */}
      <NavLink to="/" className="text-decoration-none">
        <span className="brand-text">SHARUM</span>
      </NavLink>

      {/* Nav pills */}
      <div className="nav-pill-group">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `nav-btn${isActive ? ' active' : ''}`}
          title="Inicio"
        >
          <i className="bi bi-house-fill"></i>
        </NavLink>

        <NavLink
          to="/shakira"
          className={({ isActive }) => `nav-btn${isActive ? ' active' : ''}`}
          title="Shakira"
        >
          <i className="bi bi-music-note-beamed"></i>
        </NavLink>

        <NavLink
          to="/nosotras"
          className={({ isActive }) => `nav-btn${isActive ? ' active' : ''}`}
          title="Nosotras"
        >
          <i className="bi bi-fire"></i>
        </NavLink>
      </div>

    </nav>
  );
}
