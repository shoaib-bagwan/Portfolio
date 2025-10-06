import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div
            className="bg-dark text-white p-3"
            style={{
                width: "250px",
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                height: "100vh",
                overflowY: "auto",
                margin: 0
            }}
        >
            <h2 className="mb-4">
                <span className="ms-4 fs-1">Port</span><span className="text-warning fs-2">Folio</span>
            </h2>
            <ul className="nav flex-column sideul">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-white mt-4 ">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/project" className="nav-link text-white">Projects</Link>
                </li>
                <li className="nav-item">
                    <a
                        href="SHOAIB_RESUME.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="nav-link text-white"
                    >
                        Resume
                    </a>
                </li>
                <li className="nav-item">
                    <Link to="/blog" className="nav-link text-white">Blog</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link text-white">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link text-white">About</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
