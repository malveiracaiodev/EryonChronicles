import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./navbar.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className="site-navbar">
            <div className="navbar-inner">
                <Link
                    to="/"
                    className="navbar-brand"
                    onClick={closeMenu}
                    aria-label="Eryon Chronicles — Home"
                >
                    <span className="navbar-brand-symbol">E</span>

                    <span className="navbar-brand-name">
                        ERYON
                        <span>CHRONICLES</span>
                    </span>
                </Link>

                <button
                    type="button"
                    className={`navbar-menu-toggle ${
                        menuOpen ? "is-open" : ""
                    }`}
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label={
                        menuOpen ? "Fechar menu" : "Abrir menu"
                    }
                    aria-expanded={menuOpen}
                    aria-controls="navbar-navigation"
                >
                    <span />
                    <span />
                    <span />
                </button>

                <nav
                    id="navbar-navigation"
                    className={`navbar-navigation ${
                        menuOpen ? "is-open" : ""
                    }`}
                    aria-label="Navegação principal"
                >
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `navbar-link ${
                                isActive ? "active" : ""
                            }`
                        }
                        onClick={closeMenu}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/capitulos"
                        className={({ isActive }) =>
                            `navbar-link ${
                                isActive ? "active" : ""
                            }`
                        }
                        onClick={closeMenu}
                    >
                        Capítulos
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}