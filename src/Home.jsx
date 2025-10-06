import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100 text-center text-white fade-in"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="container px-4">
        <div className="mx-auto" style={{ maxWidth: "700px" }}>
          {/* Heading */}
          <h1 className="fw-bold display-3 mb-3">
            <span className="" style={{ color: "red" }}>
              Hi
            </span>
            , I am <br />
            <span className="text-info">Shoaib Abdul Rehman Bagwan</span>
          </h1>

          {/* Intro */}
          <p className="lead text-light mb-4">
            A passionate and motivated{" "}
            <span className="fw-semibold" style={{ color: "red" }}>
              Full Stack Developer
            </span>{" "}
            with expertise in <span className="text-info">React.js</span>,{" "}
            <span className="text-info">Express.js</span>,{" "}
            <span className="text-info">Node.js</span>, and{" "}
            <span className="text-info">MongoDB</span>.
          </p>

          {/* Buttons */}
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-5 mt-4">
            <a
              href="Shoaib_Bagwan_Resume.pdf"
              download
              className="btn btn-danger btn-lg px-4 fw-semibold shadow-lg"
            >
              Download CV
            </a>

            <Link
              to="/contact"
              className="btn btn-info btn-lg px-4 fw-semibold shadow-sm text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
