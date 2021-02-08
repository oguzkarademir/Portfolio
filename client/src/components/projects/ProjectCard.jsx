import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom"

export const ProjectCard = ({project}) => {

  console.log(project)

  return (
    <Card className="card-style m-3 rounded mb-0 bg-dark text-white">
      <Link href={`/projects/${project._id}`} to={{
        pathname: `/projects/${project._id}`,
        state: {
          project: project
        }
      }}>
        <Card.Img
          fluid
          className="card-imag"
          src={project.img_url}
          alt={project.title}
        />
        <div className="overlay">
          <Card.ImgOverlay>
            <Card.Title className="card-tit">{project.title}</Card.Title>
            <Card.Text className="card-desc">
              {project.category}
            </Card.Text>
          </Card.ImgOverlay>
        </div>
      </Link>
    </Card>
  );
};
