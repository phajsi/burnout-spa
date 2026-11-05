import { NavLink, Outlet } from "react-router-dom"
import "../personal.css"

export default function PersonalLayout() {
  return (
    <div className="personal-site">
      <a className="personal-skip" href="#personal-main">
        Skip to content
      </a>
      <div className="personal-shell">
        <header className="personal-header">
          <NavLink className="personal-name" to="/" end>
            [Your name]
          </NavLink>
          <nav aria-label="Main navigation">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/travel">Travel</NavLink>
          </nav>
        </header>
        <main id="personal-main" tabIndex={-1}>
          <Outlet />
        </main>
        <footer className="personal-footer">
          <span>[Your name]</span>
          <span>Writing, travel, and projects.</span>
        </footer>
      </div>
    </div>
  )
}
