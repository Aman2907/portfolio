import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Designer.png";
import navIcon1 from "../assets/img/li.png";
import navIcon2 from "../assets/img/git.png";
import navIcon3 from "../assets/img/twii.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/amansharma2907/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Aman2907"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://x.com/AmanSha11506476"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}