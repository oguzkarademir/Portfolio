import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export const NewProject = () => {

  const [projectState, setProjectState] = useState({
    title: null,
    category: null,
    description: null,
    img_url: null,
    source_url:null,
    live_url:null,
    video_url:null
  })

  const handleChange = (event) => {
    setProjectState({
      ...projectState,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const project = {
      ...projectState,
    };

    fetch(`/api/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });

  };

  return (
    <Container>
      <Form style={{ color: "white" }}>
        <Form.Group>
          <Form.Label>Project Title</Form.Label>
          <Form.Control type="text" minLength="5" placeholder="" id="title" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Project Category</Form.Label>
          <Form.Control type="text" minLength="5" placeholder="" id="category" onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Project Image Url</Form.Label>
          <Form.Control type="text" placeholder="" id="img_url" onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Project Source Url</Form.Label>
          <Form.Control type="text" placeholder="" id="source_url" onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Project Live Url</Form.Label>
          <Form.Control type="text" placeholder="" id="live_url" onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Project Video Url</Form.Label>
          <Form.Control type="text" placeholder="" id="video_url" onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Project Description</Form.Label>
          <Form.Control as="textarea" rows={4} id="description" onChange={handleChange}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};
