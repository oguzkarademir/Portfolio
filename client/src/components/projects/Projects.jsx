import React, { useEffect } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../../redux/actions/projectActions";

export const Projects = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects());
  }, []);

  const data = useSelector((state) => state.projects.projects);
  console.log(data)

  return (
    <Row>
      {
      data.length === 0 ? (
                              <div className="spinner-border text-success m-5" role="status">
                                   <span className="sr-only">Loading...</span>
                              </div>
      ) : (
                              data.map((project) => {
                                   return (
                                        <Col xs={12} md={6} className="d-flex justify-content-center">
                                             <ProjectCard key={project.createdAt} project={project} />
                                        </Col>
                                        )   
                              })
      )
      }
    </Row>
  );
};
