import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import {FiArrowRightCircle} from "react-icons/fi"

export const Login = () => {
  return (
    <Container className="p-5">
      <Row className="p-5 justify-content-center">
          <h2 className="text-center p-5 row justify-content-center" style={{color:" #a3a3a3a9"}}>
              Login if you are Oguz Karademir.<br /> This is just the way I add content to the website.
          </h2>
      </Row>
      <Row className="p-3 justify-content-center">
          <Form className="m-1">
              <Form.Group >
                  <Form.Control type="text" placeholder="Admin" />
              </Form.Group>
          </Form>
          <Form className="d-flex m-1">
              <Form.Group >
                  <Form.Control type="password" placeholder="Admin password" />
              </Form.Group>
              <Button 
              style={{
                  color:"rgba(173, 3, 3, 0.986)", 
                  fontWeight:"500", 
                  backgroundColor:" white", 
                  border:"none",
                  height:"38px",
                  marginLeft:"15px"}}
                  href="/admin" to="/admin">
                      Go to add page <FiArrowRightCircle style={{fontSize:"20px"}}/>
              </Button>
          </Form>
      </Row>
    </Container>
  );
};
