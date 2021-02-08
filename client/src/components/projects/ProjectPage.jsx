import React from "react";
import ReactPlayer from "react-player";
import { Button, Container, Row } from "react-bootstrap";

export const ProjectPage = (props) => {

  const project = props.location.state.project;

  return (
    <Container style={{ color: "white" }}>
      <Row className="d-flex mt-5 justify-content-center">
        <ReactPlayer
          controls
          url={project.video_url}
          onReady={() => console.log("onReady callback")}
          onStart={() => console.log("onStart callback")}
          onPause={() => console.log("onPause callback")}
          onEnded={() => console.log("onEnded callback")}
          onError={() => console.log("onError callback")}
        />
      </Row>
      <Row className="mt-5 mb-2">
        <h3 className="proj-title">{project.title}</h3>
      </Row>
      <Row className="proj-cate">
        <p>
          {project.category}
        </p>
      </Row>
      <Row>
        <p className="proj-desc">
          {project.description}
        </p>
      </Row>
      <Row className="d-flex mb-5 justify-content-between">
          <Button style={{
                  color:"rgba(173, 3, 3, 0.986)", 
                  fontWeight:"500", 
                  backgroundColor:" white", 
                  border:"none",
                  }}
                  href={project.source_url}
                  target="_blank"
                  >Go to the source</Button>
          <Button style={{
                  color:"rgba(173, 3, 3, 0.986)", 
                  fontWeight:"500", 
                  backgroundColor:" white", 
                  border:"none",
                  }}
                  href={project.live_url}
                  target="_blank"
                  >View website</Button>
      </Row>
    </Container>
  );
};
