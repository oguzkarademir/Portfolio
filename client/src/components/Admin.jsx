import React from 'react'
import { Button, Container, Col } from 'react-bootstrap'

export const Admin = () => {

    return (
        <Container>
            <Col className="d-flex p-5 justify-content-center">
                <Button style={{
                    color:"rgba(173, 3, 3, 0.986)", 
                    fontWeight:"500", 
                    backgroundColor:" white", 
                    border:"none",
                    marginLeft:"15px"}}
                    href="/newproject" to="/newproject">
                    ADD A NEW PROJECT
                </Button>
            </Col>
            <Col className="d-flex p-5 justify-content-center">
                <Button style={{
                    color:"rgba(173, 3, 3, 0.986)", 
                    fontWeight:"500", 
                    backgroundColor:" white", 
                    border:"none",
                    marginLeft:"15px"}}
                    href="/newarticle" to="/newarticle">
                    ADD A NEW ARTICLE
                </Button>
            </Col>
        </Container>
        )
}

