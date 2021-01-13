import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
              Hi there! I am <strong>&nbsp;Afnan Shawawreh</strong>
                <br /> A creative, curious, motivated software developer who is
                always
                 eager to learn new technologies and constantly develop
                and
                <br /> improve, at the same time apply what I know and add value
                 wherever I go.
                 <br />  Graduated from Mutah University in 2017
                with a
                bachelor's degree in Telecommunication Engineering, I
                trained at
                <br />  Arab Potash Company for one year and 5 months as a
                helpdesk Engineer in this period I took a lot of courses like
                CCNA,
                <br />  PV System design, PLC , then joined SHETECHS three months
                special program initiated by int@j, Which is concerned with
                empowering women in the information technology sector , 
                <br /> then I joined RebootKamp (Rbk) An intensive 20-week program, Full Stack
                Web Based on Hack Reactor curriculum.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1J8J0edHOOSQRuoPsSFMfvFT5PPBt8d1s/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/AfnanShawawreh"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/afnan-shawawreh-74b8b51a1/ "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
              <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                />
               


                
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
