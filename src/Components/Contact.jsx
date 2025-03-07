// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/contact-img.svg";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: ''
//   }
//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState('Send');
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//       setFormDetails({
//         ...formDetails,
//         [category]: value
//       })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText("Sending...");
//     let response = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(formDetails),
//     });
//     setButtonText("Send");
//     let result = await response.json();
//     setFormDetails(formInitialDetails);
//     if (result.code == 200) {
//       setStatus({ succes: true, message: 'Message sent successfully'});
//     } else {
//       setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
//     }
//   };

//   return (
//     <section className="contact" id="connect">
//       <Container>
//         <Row className="align-items-center">
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
//               }
//             </TrackVisibility>
//           </Col>
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                 <h2>Get In Touch</h2>
//                 {/* <form onSubmit={handleSubmit}>
//                   <Row>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
//                     </Col>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
//                     </Col>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
//                     </Col>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
//                     </Col>
//                     <Col size={12} className="px-1">
//                       <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
//                       <button type="submit"><span>{buttonText}</span></button>
//                     </Col>
//                     {
//                       status.message &&
//                       <Col>
//                         <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
//                       </Col>
//                     }
//                   </Row>
//                 </form> */}
//                 <h1>Name: Aman Sharma </h1>
//                 <h1>Email: amandeo2907@gmail.com</h1>
//                 <h1>7602603674</h1>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   )
// } 
import { Mail, Phone, User } from "lucide-react";

export const Contact = () => {
  return (
    <section id="connect" className="contact-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="header fade-in">
            <h2 className="title">Get In Touch</h2>
            <p className="subtitle">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>

          <div className="contact-card fade-up">
            <div className="contact-item">
              <div className="icon-wrapper">
                <User className="icon" />
              </div>
              <div className="contact-info">
                <p className="label">Name</p>
                <p className="value">Aman Sharma</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-wrapper">
                <Mail className="icon" />
              </div>
              <div className="contact-info">
                <p className="label">Email</p>
                <a 
                  href="mailto:amandeo2907@gmail.com"
                  className="value contact-link"
                >
                  amandeo2907@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-wrapper">
                <Phone className="icon" />
              </div>
              <div className="contact-info">
                <p className="label">Phone</p>
                <a 
                  href="tel:+917602603674"
                  className="value contact-link"
                >
                  +91 7602603674
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};