import React from "react";
import { Col, Row, Image, Container } from "react-bootstrap";
import myImg from "../assets/T91PPTG9H-U013BC7JTJM-13a0099dfd7d-192.png";

export const About = () => {
  return (
    <Container fluid >
      <Row className="p-3 pt-5" style={{ color: "white" }}>
        <Col
          xs={12}
          lg={4}
          className="d-flex align-items-center justify-content-center"
        >
          <Image
            fluid
            src={myImg}
            style={{ width: "22rem", borderRadius: "10px" }}
          />
        </Col>
        <Col
          xs={12}
          lg={8}
          className="about-intro d-flex mt-2 align-items-center justify-content-center text-center"
        >
          Let me tell you briefly about myself. I am Turkish and I live in
          Belgium. I entered the world of development and I enjoy writing code,
          designing a website and creating algorithms. I chose this career
          because I enjoyed it while studying and doing it. I like to improve
          myself, I still have a long way to go. I want to gain experience in
          different fields of software and I will develop creative projects and
          applications. I also love watching movies and listening to music and sports
          are part of my life.
        </Col>
      </Row>
    </Container>
  );
};
