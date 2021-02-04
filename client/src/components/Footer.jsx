import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import {FaGithub, FaLinkedin, FaTwitter, FaInstagram} from "react-icons/fa"
import { RiAdminFill } from "react-icons/ri"


export const Footer = () => {
    return (
        <Container fluid>
            <Row className="p-5 navbar-fixed-bottom" >
                <Col className="text-center p-3"><a href=""><FaGithub style={{color:"#b60404", fontSize:"40px"}}/></a></Col>
                <Col className="text-center p-3"><a href=""><FaLinkedin style={{color:"#b60404", fontSize:"40px"}}/></a></Col>
                <Col className="text-center p-3"><a href=""><FaTwitter style={{color:"#b60404", fontSize:"40px"}}/></a></Col>
                <Col className="text-center p-3"><a href=""><FaInstagram style={{color:"#b60404", fontSize:"40px"}}/></a></Col>
                <Col className="text-center p-3"><a href="/login" to="/login"><RiAdminFill style={{color:"#b60404", fontSize:"40px"}}/></a></Col>
            </Row>
        </Container>
    )
}
