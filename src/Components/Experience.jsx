import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Experience</h2>
                  <div className="experience-item">
                    <h3> Full Stack Developer </h3>
                    <h4> Codeclouds IT Solution, Kolkata,INDIA </h4>
                    <p> Duration: Aug 2022 - Dec 2022 </p>
                    <ul>
                      <li>Contributed to Sticky CRM development, focusing on custom business logic.</li>
                      <li> Built an interactive FAQ module for an e-commerce platform using jQuery & JavaScript.</li>
                      <li>Collaborated with senior developers to deliver real-world, client-centric solutions.</li>
                      <li>Languages - HTML, CSS, JAVASCRIPT, JQUERY, BOOTSTRAP, PHP, MySQL</li>
                    </ul>
                  </div>
                  <div className="experience-item">
                    <h3> Full Stack Developer </h3>
                    <h4> Freelance  </h4>
                    <p> Duration: June 2023 - June 2025 </p>
                    <p>
                      Worked on the design, development, and maintenance of web applications, focusing on building scalable solutions, optimizing performance, and collaborating with cross-functional teams to deliver high-quality software.
                    </p>

                    <ul>
                      <li>Engineered scalable, dynamic web apps for diverse clients, improving satisfaction by 40%.</li>
                      <li>Optimized performance, achieving 50% faster load times</li>
                      <ul>
                        <li> Designed & integrated a Business Rules Engine (BRE) for loan automation, improving decision-making
                          efficiency by 30%</li>
                        <li>Collaborated in cross-functional teams, ensuring seamless integration of front-end and back-end systems
                          for end-to-end product delivery</li>
                        <li> Built a custom short URL service to streamline loan-related communications</li>
                        <li> Demonstrated proficiency in front-end frameworks such as React.js and Redux to create engaging interfaces
                          and enhance client satisfaction.</li>

                        <li>Languages - ReactJS, Redux, NodeJS, ExpressJS, Tailwind.css</li>
                      </ul>
                    </ul>
                  </div>
                  {/* <div className="experience-item">
                    <h3> Full Stack Developer ( Contract ) </h3>
                    <h4> Roopya, kolkata,INDIA </h4>
                    <p> Duration: Dec 2024 - Mar 2025 </p>
                    <p>
                      Worked on the design, development, and maintenance of web applications, focusing on building scalable solutions, optimizing performance, and collaborating with cross-functional teams to deliver high-quality software.
                    </p>
                    <ul>
                      <li>Implemented BRE to automate loan approval processes and optimize rule-based decision-making for customer
                        eligibility checks, improving efficiency by 30 %.</li>
                      <li>Integrated BRE with a Node.js backend and frontend UI, enabling seamless business logic updates. Developed
                        a short URL service for delivering loan-related messages efficiently.</li>
                      <li>Languages - ReactJS, Redux, NodeJS, ExpressJS, Tailwind.css</li>
                    </ul>
                  </div> */}
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
