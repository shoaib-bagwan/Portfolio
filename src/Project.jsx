import { useState } from "react";
import { Link } from 'react-router-dom';

function Project() {

  const certification=[
    {id:1, name:"MERN Stack Profectional Course", source:"The Kiran Academy",loc:"./Mern_Stack_Certificate.pdf"},
    {id:2, name:"Front End Development",source:"Great Learning" ,loc:"/Front_end_certificate.pdf"},
    {id:3, name:"SQL for Data Science",source:"Great Learning",loc:"/SQL_Certificate.pdf"},
    {id:4, name:"ChatGPT for coder's",source:"Great Learning",loc:"/ChatGPT_Certificate.pdf"},
  ]
  const basicProjects = [
    { id: "add_to_card", title: "Add To Cart" },
    { id: "calculator", title: "Calculator" },
    { id: "change_image_on_hover", title: "Change Image on Hover" },
    { id: "digital_clock", title: "Digital Clock" },
    { id: "form_validation", title: "Form Validation" },
    { id: "string_operation", title: "String Operation" },
  ];
  const FlipKartDescription = `Built a Flipkart clone with user authentication using JWT tokens, enabling secure login and
operations. Developed using React, Node.js,
Express.js, MongoDB, and REST APIs, with admin
functionality for managing products and users.
Integrated a payment gateway to handle secure
transactions.`

  const carDescription = `Built a full-stack car dealing platform where users can buy new cars and sell their old ones. The frontend was developed using React, while the back-end was implemented with Node.js, Express.js, and
MongoDB. The system includes REST APIs for all CRUD operations and user interactions, and an admin
panel for managing car listings and platform modifications. Additionally, a secure payment gateway was
integrated to facilitate transactions for car purchases`

  const advancedProjects = [
    {
      id: "flipkart_clone",
      title: "FlipKart Clone",
      url: "https://flipkart-clone-topaz-iota.vercel.app",
      desc: FlipKartDescription
    },
    {
      id: "car_dealer",
      title: "Car Dealer",
      url: "https://your-car-dealer-project.vercel.app",
      desc: carDescription
    },
  ];

  const [activeId, setActiveId] = useState(null); // store which basic project is clicked

  const handleBasicClick = (id) => {
    setActiveId(id); // mark selected project
  };

  const renderProjectsBasic = (projects) =>
    projects.map((project) => (
      <div
        key={project.id}
        className="col-md-4"
        onClick={() => handleBasicClick(project.id)}
      >
        <div
          className={`card shadow project-card text-center p-3 card-hover ${activeId === project.id ? "border border-3 border-danger bg-warning" : ""
            }`}
          style={{ cursor: "pointer" }}
        >
          <div className="card-body">
            <h5 className="card-title ">{project.title}</h5>
          </div>
        </div>
      </div>
    ));

  const renderProjectsAdvanced = (projects) =>
    projects.map((project) => (
      <div key={project.id} className="col-md-4">
        <a href={project.url} target="_blank" className="text-decoration-none  text-warning fw-bold">
          <div className="card shadow project-card text-center p-3 card-hover">
            
            <div className="card-body ">
              
              <h5 className="card-title fw-bold ">{project.title}</h5>
              <span className="card-text">check </span>
            </div>
          </div>
          </a>
      </div>
    ));

     const renderCertification = (projects) =>
    projects.map((project) => (
      <div
        key={project.id}
        className="col-md-4"
        onClick={() => handleBasicClick(project.id)}
      >
        <Link to={`${project.loc}`} target="_blank" className="text-decoration-none">
        <div
          className="card shadow project-card text-center p-3 card-hover"
          style={{ cursor: "pointer" }}
        >
          <div className="card-body">
            <h5 className="card-title ">{project.name}</h5>
            <span className="card-text text-warning fw-bold ">{project.source}</span>
          </div>
        </div>
        </Link>
      </div>
    ));

  return (
    <div className="container my-5">
      <h2 className="text-warning mt-5 mb-4 border-bottom pb-2 d-inline-block">
        Courses and Certification
      </h2>
      <div className="row g-4">{renderCertification(certification)}</div>
       <hr className="bg-white" />
      {/* Basic Projects */}
      <span><h2 className="text-center text-warning mb-4 mt-5 border-bottom pb-2 d-inline-block">
        Basic Projects </h2> {basicProjects.some(e => e.id === activeId) && <strong className="ms-2 text-danger"> Note you can watch Only Advance Project</strong>}
      </span>

      <div className="row g-4">{renderProjectsBasic(basicProjects)}</div>
       <hr className="bg-white" />

      {/* Advanced Projects */}
      <h2 className="text-center text-warning mt-5 mb-4 border-bottom pb-2 d-inline-block">
        Advanced Projects
      </h2>
      <div className="row g-4">{renderProjectsAdvanced(advancedProjects)}</div>
       <hr className="bg-white" />

      {/* CSS */}
      <style>{`
        .project-card {
          border-radius: 15px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
        .section-heading {
          position: relative;
          display: inline-block;
        }
        .section-heading::after {
          content: "";
          display: block;
          width: 60%;
          height: 3px;
          background-color: currentColor;
          margin: 8px auto 0 auto;
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
}

export default Project;
