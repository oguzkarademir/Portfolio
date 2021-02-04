import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export const NewArticle = () => {

  const [articleState, setArticleState] = useState({
    title: null,
    category: null,
    description: null,
    image: null,
    medium_url:null
  })

  const handleChange = (event) => {
    setArticleState({
      ...articleState,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const article = {
      ...articleState,
    };

    fetch(`/api/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
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
          <Form.Label>Article Title</Form.Label>
          <Form.Control type="text" placeholder="" id="title" onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Article Category</Form.Label>
          <Form.Control type="text" placeholder="" id="category" onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Article Image Url</Form.Label>
          <Form.Control type="text" placeholder="" id="image" onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Article Medium Url</Form.Label>
          <Form.Control type="text" placeholder="" id="medium_url" onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Article Description</Form.Label>
          <Form.Control as="textarea" rows={4} id="description" onChange={handleChange}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};
