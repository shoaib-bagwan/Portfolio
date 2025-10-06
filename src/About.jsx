function About() {
  return (
    <div className="container my-5">
      {/* Introduction Section */}
      <h2 className="text-center mb-4 text-warning border-bottom pb-2 d-inline-block">Introduction</h2>
      <div className="fs-3">
        <ul>
          <li>
            Hello, my name is Shoaib Bagwan. I am a passionate Full Stack Developer with experience in building modern web applications.
          </li>
          <li>
            I have strong skills in front-end development using React, Bootstrap, JavaScript, HTML, and CSS.
          </li>
          <li>
            On the backend side, I am familiar with Node.js, Express, PHP, Java, and Python.
          </li>
          <li>
            I also work with popular databases like MySQL, MongoDB, PostgreSQL, and use tools like PHPMyAdmin.
          </li>
          <li>
            I have excellent knowledge of designing and working with REST APIs, ensuring smooth communication between frontend and backend.
          </li>
          <li>
            I have implemented payment gateway integrations in my projects, allowing secure and efficient online transactions.
          </li>
          <li>
            I use JWT (JSON Web Tokens) for authentication and authorization to secure user data and sessions in my applications.
          </li>
          <li>
            My goal is to create user-friendly, efficient, and scalable software solutions for real-world problems.
          </li>
        </ul>

      </div>
      <hr className="bg-white" />

      {/* Frontend Section */}
      <h3 className="text-center mt-5 mb-4 text-warning border-bottom pb-2 d-inline-block">Frontend</h3>
      <div className="row g-4">
        {["ReactJS", "Bootstrap 5", "JavaScript", "HTML & CSS"].map((tech, i) => (
          <div key={i} className="col-md-3">
            <div className="card shadow h-100 card-hover">
              <div className="card-body text-center">
                <h5 className="card-title">{tech}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="bg-white" />

      {/* Backend Section */}
      <h3 className="text-center mt-5 mb-4 text-warning border-bottom pb-2 d-inline-block">Backend</h3>
      <div className="row g-4">
        {["NodeJS", "Express", "Java", "Python", "C", "C++", "PHP"].map(
          (tech, i) => (
            <div key={i} className="col-md-3">
              <div className="card shadow h-100 card-hover">
                <div className="card-body text-center">
                  <h5 className="card-title">{tech}</h5>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <hr className="bg-white" />

      {/* Database Section */}
      <h3 className="text-center mt-5 mb-4 text-warning border-bottom pb-2 d-inline-block">Database</h3>
      <div className="row g-4">
        {["MongoDB", "MySQL", "PostgreSQL", "PHPMyAdmin"].map((tech, i) => (
          <div key={i} className="col-md-3">
            <div className="card shadow h-100 card-hover">
              <div className="card-body text-center">
                <h5 className="card-title">{tech}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="bg-white" />

      {/* Education Section */}
      <h3 className="text-center mt-5 mb-4 text-warning border-bottom pb-2 d-inline-block">Education</h3>
      <div className="table-responsive">
        <table className="table table-dark table-hover text-center align-middle shadow-lg rounded">
          <thead className="table-dark">
            <tr>
              <th className="py-3 px-4">Qualification</th>
              <th className="py-3 px-4">Institute</th>
              <th className="py-3 px-4">Percentage</th>
              <th className="py-3 px-4">CGPA</th>
              <th className="py-3 px-4">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-4">10th (SSC)</td>
              <td className="py-3 px-4">Moledina High School and Jr. College, Pune</td>
              <td className="py-3 px-4">75%</td>
              <td className="py-3 px-4">-</td>
              <td className="py-3 px-4">-</td>
            </tr>
            <tr>
              <td className="py-3 px-4">12th (HSC)</td>
              <td className="py-3 px-4">Moledina High School and Jr. College, Pune</td>
              <td className="py-3 px-4">66%</td>
              <td className="py-3 px-4">-</td>
              <td className="py-3 px-4">-</td>
            </tr>
            <tr>
              <td className="py-3 px-4">BCA(Bachlor's of Computer Applications)</td>
              <td className="py-3 px-4">Abeda Inamdar Senior College, Pune</td>
              <td className="py-3 px-4">80.523%</td>
              <td className="py-3 px-4">8.523</td>
              <td className="py-3 px-4">A+</td>
            </tr>
          </tbody>
        </table>
         <hr className="bg-white" />
      </div>

    </div>
  );
}

export default About;
