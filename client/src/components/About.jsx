import React from "react";
import { Col, Row, Image, Container } from "react-bootstrap";
import myImg from "../assets/T91PPTG9H-U013BC7JTJM-13a0099dfd7d-192.png";

export const About = () => {
  return (
    <Container fluid >
      <Row className="p-5" style={{ color: "white" }}>
        <Col xs={12} lg={4} className="d-flex align-items-center justify-content-center" >
            <Image fluid src={myImg} style={{ width: "22rem", borderRadius:"10px" }} />        
        </Col>
        <Col xs={12} lg={8} className="about-intro p-5 d-flex align-items-center justify-content-center text-center" >
          Contrary to popular belief, Lorem Ipsum is no t simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Lati n professor at
          Hampden-Sydney College in Virginia, loo ked up one of the more obscure
          Latin words, consectetur , from a Lorem Ipsum passage, and going
          through the c ites of the word in classical literature, discovered the
          un doubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extr emes of Good and
          Evil) by Cicero, written in 45 BC. This bo ok is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ips um dolor sit amet..", comes from a line in
          section 1.10.32.
        </Col>
      </Row>
    </Container>
  );
};
