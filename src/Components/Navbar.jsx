import { useState, useEffect } from 'react';
import logo from '../assets/img/Designer.png';
import navIcon1 from '../assets/img/li.png';
import navIcon2 from '../assets/img/git.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <>
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container fluid>
                    <Navbar.Brand href="#home" id='logo'>
                        <img src={logo} alt="Logo" style={{ width: '80px', height: 'auto' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll">
                        <span className='navbar-toggler-icon'></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className='navbar-text'>
                            <div className='social-icon'>
                                <a href="https://www.linkedin.com/in/amansharma2907/"><img src={navIcon1} alt="" /></a>
                                <a href="https://github.com/Aman2907"><img src={navIcon2} alt="" /></a>
                                <a href="#"><img src={navIcon3} alt="" /></a>
                            </div>
                            <button
                                className='vvd'
                                onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                <span>Let's Connect</span>
                            </button>
                            {/* Resume View & Download Buttons */}
                            <div className="resume-buttons">
                                <button className='vvd' onClick={() => setShowModal(true)}>
                                    <span>View Resume</span>
                                </button>
                                <a href="/CV/aman.pdf" download="Aman_Sharma_Resume.pdf" className="resume-button">
                                    <button className='vvd'>
                                        <span>Download Resume</span>
                                    </button>
                                </a>
                            </div>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Resume Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Resume Preview</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe
                        src="/CV/aman.pdf"
                        width="100%"
                        height="500px"
                        title="Resume Preview"
                    ></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <a href="/CV/aman.pdf" download="Aman_Sharma_Resume.pdf">
                        <Button variant="primary">Download</Button>
                    </a>
                </Modal.Footer>
            </Modal>
        </>
    );
};
