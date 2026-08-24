import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Experience</h2>

                  {/* CodeClouds */}
                  <div className="experience-item">
                    <h3>Full Stack Developer</h3>
                    <h4>CodeClouds IT Solutions, Kolkata, India</h4>
                    <p>
                      <strong>Duration:</strong> Aug 2022 – Dec 2022
                    </p>

                    <ul>
                      <li>
                        Contributed to Sticky CRM development by implementing
                        custom business logic.
                      </li>
                      <li>
                        Built an interactive FAQ module for an e-commerce
                        platform using JavaScript and jQuery.
                      </li>
                      <li>
                        Collaborated with senior developers to deliver
                        client-centric solutions.
                      </li>
                      <li>
                        <strong>Tech Stack:</strong> HTML, CSS, JavaScript,
                        jQuery, Bootstrap, PHP, MySQL
                      </li>
                    </ul>
                  </div>

                  {/* Roopya */}
                  {/* <div className="experience-item">
                    <h3>Full Stack Developer (Contract)</h3>
                    <h4>Roopya, Kolkata, India</h4>
                    <p>
                      <strong>Duration:</strong> Dec 2024 – Mar 2025
                    </p>

                    <p>
                      Worked on the development and maintenance of fintech
                      applications, focusing on scalable solutions, business
                      rule automation, and performance optimization.
                    </p>

                    <ul>
                      <li>
                        Implemented a Business Rules Engine (BRE) to automate
                        loan approval workflows, improving decision-making
                        efficiency by 30%.
                      </li>
                      <li>
                        Integrated BRE with Node.js backend services and React
                        frontend for seamless business logic updates.
                      </li>
                      <li>
                        Developed a short URL service for loan-related customer
                        communications.
                      </li>
                      <li>
                        <strong>Tech Stack:</strong> React.js, Redux, Node.js,
                        Express.js, Tailwind CSS
                      </li>
                    </ul>
                  </div> */}

                  {/* Freelance */}
                  <div className="experience-item">
                    <h3>Freelance Full Stack Developer</h3>
                    <h4>Remote</h4>
                    <p>
                      <strong>Duration:</strong> Jun 2023 – Jun 2026
                    </p>


                    <ul>
                      <li>
                        Built scalable full-stack web applications for multiple clients using React.js, Node.js, Express.js, and MySQL.
                      </li>
                      <li>
                        Developed a FinTech loan application used by 50K+ users to collect and manage customer information, using
                        React.js, Redux, API integrations, and responsive UI design
                      </li>
                      <li>
                        Developed AI-powered applications using RAG (Retrieval-Augmented Generation) to enable context-aware
                        responses by retrieving relevant information from knowledge sources
                      </li>
                      <li>
                        Resolved production issues, optimized application performance, and improved overall application efficiency and
                        reliability
                      </li>
                      <li>
                        Collaborated with cross-functional teams to integrate
                        frontend and backend systems.
                      </li>
                      <li>
                        Leveraged GitHub Copilot and AI-assisted development
                        tools to accelerate implementation and debugging.
                      </li>
                      <li>
                        <strong>Tech Stack:</strong> React.js, Redux, JavaScript, Node.js, Express.js, MySQL, HTML, CSS, REST APIs, RAG
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};