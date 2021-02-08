import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import {FaGithub, FaLinkedin, FaTwitter, FaInstagram} from "react-icons/fa"
import { RiAdminFill } from "react-icons/ri"


export const Footer = () => {
    return (
        <Container fluid>
            <Row className="p-1 navbar-fixed-bottom">
                <Col className="text-center p-1"><a href=""><FaGithub style={{color:"#b60404", fontSize:"40px"}}/></a></Col>
                <Col className="text-center p-1"><a href=""><FaLinkedin style={{color:"#b60404", fontSize:"40px"}}/></a></Col>
                <Col className="text-center p-1"><a href=""><FaTwitter style={{color:"#b60404", fontSize:"40px"}}/></a></Col>
                <Col className="text-center p-1"><a href=""><FaInstagram style={{color:"#b60404", fontSize:"40px"}}/></a></Col>
                <Col className="text-center p-1"><a href="/login" to="/login"><RiAdminFill style={{color:"#b60404", fontSize:"40px"}}/></a></Col>
            </Row>
        </Container>
    )
}
