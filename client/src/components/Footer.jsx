import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import {FaGithub, FaLinkedin, FaTwitter, FaInstagram} from "react-icons/fa"
import { RiAdminFill } from "react-icons/ri"


export const Footer = () => {
    return (
        <Container fluid>
            <Row className="p-1 navbar-fixed-bottom">
                <Col className="text-center p-1"><a href="https://github.com/oguzkarademir" target="_blank"><FaGithub style={{color:"#b60404", fontSize:"40px"}}/></a></Col>
                <Col className="text-center p-1"><a href="https://www.linkedin.com/in/oguz-karademir-254493187/" target="_blank"><FaLinkedin style={{color:"#b60404", fontSize:"40px"}}/></a></Col>
                <Col className="text-center p-1"><a href="https://twitter.com/oguzkdemir" target="_blank"><FaTwitter style={{color:"#b60404", fontSize:"40px"}}/></a></Col>
                <Col className="text-center p-1"><a href="https://www.instagram.com/ogzkarademir/" target="_blank"><FaInstagram style={{color:"#b60404", fontSize:"40px"}}/></a></Col>
                <Col className="text-center p-1"><a href="/login" to="/login"><RiAdminFill style={{color:"#b60404", fontSize:"40px"}}/></a></Col>
            </Row>
        </Container>
    )
}
