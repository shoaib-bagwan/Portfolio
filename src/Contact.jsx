import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <div className="container py-5">
      <h2 className="text-center text-warning border-bottom pb-2 d-inline-block mb-5">
        Contact Me
      </h2>

      <div className="row justify-content-center g-4">
        {/* Name */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-sm h-100 text-center p-4 border-0 rounded-4">
            <h5 className="text-danger mb-2">Name</h5>
            <p className="fw-semibold">Bagwan Shoaib Abdul Rehman</p>
          </div>
        </div>

        {/* Location */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-sm h-100 text-center p-4 border-0 rounded-4">
            <h5 className="text-danger mb-2">Location</h5>
            <p className="fw-semibold"><FaMapMarkerAlt className="me-2 text-info" />Pune, Maharashtra</p>
          </div>
        </div>

        {/* Email */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-sm h-100 text-center p-4 border-0 rounded-4">
            <h5 className="text-danger mb-2">Email</h5>
            <p className="fw-semibold">
              <FaEnvelope className="me-2 text-info" />
              <a href="mailto:shoaibbagwan727@gmail.com" className="text-decoration-none text-primary">
                shoaibbagwan727@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Mobile */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-sm h-100 text-center p-4 border-0 rounded-4">
            <h5 className="text-danger mb-2">Mobile</h5>
            <p className="fw-semibold">
              <FaPhone className="me-2 text-info" />
              <a href="tel:+918669018078" className="text-decoration-none text-primary">
                8669018078
              </a>
            </p>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-sm h-100 text-center p-4 border-0 rounded-4">
            <h5 className="text-danger mb-2">LinkedIn</h5>
            <p className="fw-semibold">
              <FaLinkedin className="me-2 text-info" />
              <a
                href="https://www.linkedin.com/in/shoaib-bagwan-525691201"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-primary"
              >
                Connect
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
