import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_book from "../../assets/img/projects/book.webp";
import L_Memories from "../../assets/img/projects/memories.png";
import L_Guess from "../../assets/img/projects/guessNumberGame.png";
import L_Todo from "../../assets/img/projects/todo.png";

import L_nany from "../../assets/img/projects/nany.webp";

import L_Moody from "../../assets/img/projects/Moody.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_reactnative from "../../assets/img/skills/reactnative.svg";

import Image from "react-bootstrap/Image";
import L_HEROKU from "../../assets/img/skills/heroku.svg";

import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";

import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          <ImageEvent
            className="text-center"
            text="Memories App"
            src={L_Memories}
            alt="Memories"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Web App allows Web App to
                        save Memory with the date (my first App Using Redux
                        library)
                        <br />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>

                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_NODE_JS}
                                  alt="Node.js"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Node.js
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_EXPRESS}
                                  alt="Express"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Express
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_MATERIALUI}
                                  alt="material-Ui"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                MATERIALUI
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_HEROKU}
                                  alt="HEROKU"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                HEROKU
                              </span>
                            </li>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/AfnanShawawreh/MemoriesMernApp"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://memories-mern-app2020.netlify.app/"
                  target="_blank"
                >
                  VISIT APP
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project:Nany app */}
          <ImageEvent
            className="text-center"
            text="Nany App"
            src={L_nany}
            alt="Nany App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An Mobile App that help
                        mothers to reserve baby sitter online
                        <br />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_reactnative}
                                  alt="React Native"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                React Native
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_NODE_JS}
                                  alt="Node.js"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Node.js
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_EXPRESS}
                                  alt="Express"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Express
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_MATERIALUI}
                                  alt="material-Ui"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                MATERIALUI
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_HEROKU}
                                  alt="HEROKU"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                HEROKU
                              </span>
                            </li>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/Nany-Cares-Thesis-Project"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://www.youtube.com/watch?v=380EWQJzTAE"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project:BOOK Teacher */}
          <ImageEvent
            className="text-center"
            text="Book Teacher"
            src={L_book}
            alt="Book Teacher"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Web App allows
                        communication between teachers and students who need
                        study help.
                        <br />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>

                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_NODE_JS}
                                  alt="Node.js"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Node.js
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_EXPRESS}
                                  alt="Express"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Express
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_MATERIALUI}
                                  alt="material-Ui"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                MATERIALUI
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_HEROKU}
                                  alt="HEROKU"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                HEROKU
                              </span>
                            </li>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/Team-Six-GreenField"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton href="https://youtu.be/pMADUGiT2Pg" target="_blank">
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          <ImageEvent
            className="text-center"
            text="GUESS NUMBER GAME"
            src={L_Guess}
            alt="guess number game"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Mobile Game to guess
                        entered number
                        <br />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_reactnative}
                                  alt="React Native"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                React Native
                              </span>
                            </li>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/AfnanShawawreh/ReactNative-Game"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton href="https://youtu.be/eNi1mTjrpxg" target="_blank">
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          {/* Project:Moody App */}
          <ImageEvent
            className="text-center"
            text="Mody APP"
            src={L_Moody}
            alt="Mody APP"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>Web App allows user to
                        listen to song depending on his mood
                        <br />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>

                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_NODE_JS}
                                  alt="Node.js"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Node.js
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_EXPRESS}
                                  alt="Express"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Express
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_MATERIALUI}
                                  alt="material-Ui"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                MATERIALUI
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_HEROKU}
                                  alt="HEROKU"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                HEROKU
                              </span>
                            </li>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/The-Moody-App"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          <ImageEvent
            className="text-center"
            text="TO-DO App"
            src={L_Todo}
            alt="TO_DO-APP"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Simple To-Do App To Save
                        and delete tasks from the list
                        <br />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>

                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_NODE_JS}
                                  alt="Node.js"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Node.js
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_EXPRESS}
                                  alt="Express"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Express
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_MATERIALUI}
                                  alt="material-Ui"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                MATERIALUI
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_HEROKU}
                                  alt="HEROKU"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                HEROKU
                              </span>
                            </li>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/AfnanShawawreh/ToDoFullStackApp"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://todo-mern-app.netlify.app/"
                  target="_blank"
                >
                VISIT APP
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
