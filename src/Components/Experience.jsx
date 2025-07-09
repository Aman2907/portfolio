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
                    {/* <p>
                      Worked as a Software Engineer at TCS, contributing to the design, development, 
                      and maintenance of web applications. Responsible for implementing scalable 
                      solutions, optimizing performance, and collaborating with cross-functional teams 
                      to deliver high-quality software.
                    </p> */}
                    <ul>
                      <li>Learned About Sticky CRM. Achieved practical exposure toward Custom CRM</li>
                      <li>Developed FAQ Page for E-Commerce Website. jQuery and JavaScript are being used for different functionalities.</li>
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
                      <li>Developed dynamic and responsive web applications for various clients using a full-stack approach, with proficiency
                        in both front-end and back-end technologies.</li>
                      <li>Demonstrated proficiency in front-end frameworks such as React.js and Redux to create engaging user experiences
                        and enhance client satisfaction.</li>
                    <ul>
                      <li>Implemented BRE to automate loan approval processes and optimize rule-based decision-making for customer
                        eligibility checks, improving efficiency by 30 %.</li>
                      <li>Integrated BRE with a Node.js backend and frontend UI, enabling seamless business logic updates. Developed
                        a short URL service for delivering loan-related messages efficiently.</li>
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
