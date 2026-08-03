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
                  <div className="experience-item">
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
                  </div>

                  {/* Freelance */}
                  <div className="experience-item">
                    <h3>Freelance Full Stack Developer</h3>
                    <h4>Remote</h4>
                    <p>
                      <strong>Duration:</strong> Jun 2023 – Jun 2026
                    </p>

                    <p>
                      Designed and developed scalable web applications for
                      clients, focusing on performance, maintainability, and
                      end-to-end product delivery.
                    </p>

                    <ul>
                      <li>
                        Built dynamic web applications that improved client
                        satisfaction and business workflows.
                      </li>
                      <li>
                        Optimized application performance, reducing page load
                        times by up to 50%.
                      </li>
                      <li>
                        Developed REST APIs using Node.js and Express.js with
                        MongoDB integration.
                      </li>
                      <li>
                        Built custom URL shortening services with analytics and
                        tracking features.
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
                        <strong>Tech Stack:</strong> React.js, Redux, Node.js,
                        Express.js, MongoDB, Tailwind CSS
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