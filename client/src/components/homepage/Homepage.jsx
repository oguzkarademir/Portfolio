import React, { useEffect } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { BsFileCode } from 'react-icons/bs';
import { AiFillRead } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../../redux/actions/projectActions";
import { getAllArticles } from "../../redux/actions/articleActions";
import { Link } from "react-router-dom"



export const Homepage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects());
    dispatch(getAllArticles())
  }, []);

  const projects = useSelector((state) => state.projects.projects);
  const articles = useSelector((state) => state.articles.articles);

  const lastP = projects[projects.length - 1];
  const secondP = projects[projects.length - 2];
  const thirdP = projects[projects.length - 3];

  const lastA = articles[articles.length - 1];
  const secondA = articles[articles.length - 2];
  const thirdA = articles[articles.length - 3];

  return (
    <Container fluid>
      <Row className="p-5">
        <Col xs={12} lg={6} className="home-intro p-5 d-flex align-items-center justify-content-center">
            Hi It’s Oguz and I am a frontend developer. Here I will share my own works and articles.
        </Col>
        <Col xs={12} lg={6}>
            <Row className="pt-4 d-flex justify-content-center">
                <Card className="p-4 card-style" style={{width:"36rem", height:"20rem"}}>
                    <Card.Title style={{color:"black"}}>Latest Project</Card.Title>
                    <ListGroup variant="flush">
                        <Link to={{
                          pathname:`/projects/${lastP?._id}`,
                          state:{
                            project: lastP
                          }
                        }} className="mt-4"><BsFileCode style={{color:"#6D0000", marginRight:"10px"}}/>{lastP?.title}</Link>
                        <Link to={{
                          pathname:`/projects/${secondP?._id}`,
                          state:{
                            project: secondP
                          }
                        }} className="mt-4"><BsFileCode style={{color:"#6D0000", marginRight:"10px"}}/>{secondP?.title}</Link>
                        <Link to={{
                          pathname:`/projects/${thirdP?._id}`,
                          state:{
                            project: thirdP
                          }
                        }} className="mt-4"><BsFileCode style={{color:"#6D0000", marginRight:"10px"}}/>{thirdP?.title}</Link>
                    </ListGroup>
                </Card>
            </Row>
            <Row className="pt-4 d-flex justify-content-center">
                <Card className="p-4 card-style" style={{width:"36rem", height:"20rem"}}>
                    <Card.Title style={{color:"black"}}>Latest Articles</Card.Title>
                    <ListGroup variant="flush">
                        <Card.Link href={lastA?.medium_url} target="_blank" className="mt-4"><AiFillRead style={{color:"#6D0000", marginRight:"10px"}}/>{lastA?.title}</Card.Link>
                        <Card.Link href={secondA?.medium_url} target="_blank" className="mt-4"><AiFillRead style={{color:"#6D0000", marginRight:"10px"}}/>{secondA?.title}</Card.Link>
                        <Card.Link href={thirdA?.medium_url} target="_blank" className="mt-4"><AiFillRead style={{color:"#6D0000", marginRight:"10px"}}/>{thirdA?.title}</Card.Link>
                    </ListGroup>
                </Card>
            </Row>
        </Col>
      </Row>
    </Container>
  );
};
