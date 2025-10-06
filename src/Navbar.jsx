
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark  py-3 shadow-sm sticky-top border-bottom border-white" style={{backgroundColor:"#121212"}}>
            <div className="container">
                {/* Logo */}
                <Link className="navbar-brand fw-bold fs-3 text-white" to="/">
                    <span className="text-warning" >Port</span>Folio
                </Link>

                {/* Toggler (Hamburger Button) */}
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu Items */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav text-center gap-5">
                        <li className="nav-item mx-2">
                            <Link className="nav-link fw-semibold" style={{color:"red"}}to="/">HOME</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-white" to="/about">ABOUT</Link>
                        </li>
                        
                        <li className="nav-item mx-2" >
                            <Link
                                to="https://resume-alpha-ruby.vercel.app/"
                                className="nav-link fw-semibold"
                                style={{color:"red"}}
                                target="_blank"
                            >
                                RESUME
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-white" to="/projects">PROJECT</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-white hover-text-warning" to="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
