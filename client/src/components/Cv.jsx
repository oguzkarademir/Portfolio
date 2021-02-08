import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import CvImg from "../assets/cv.png"

export const Cv = () => {
    return (
        <Container className="p-5" >
            <Row className="row-btn d-flex align-items-center justify-content-center">
                <Button 
                    href="https://drive.google.com/file/d/18WSsgmeRVTd2kP_jzCVsDUYivZ9prIHs/view?usp=sharing" 
                    target="_blank" 
                    className="btn-cv m-3 " 
                    style={{color:"rgba(173, 3, 3, 0.986)", fontWeight:"500", backgroundColor:" white", border:"none"}}>
                        Download my CV
                </Button>
            </Row>
            <Row className="d-flex align-items-center justify-content-center">
            <Image fluid src={CvImg} />
            </Row>            
        </Container>
            
    )
}
