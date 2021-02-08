import React from "react";
import { Card } from "react-bootstrap";

export const BlogCard = ({article}) => {

  return (
    <Card className="card-style m-3 rounded mb-0 bg-dark text-white">
      <Card.Link target="_blank" href={article.medium_url} to={article.medium_url}>
        <Card.Img fluid className="card-imag" src={article.image} alt={article.title} />
        <div className="overlay">
          <Card.ImgOverlay>
            <Card.Title className="card-tit">{article.title}</Card.Title>
            <Card.Text className="card-desc">
              {article.description}
            </Card.Text>
          </Card.ImgOverlay>
        </div>
      </Card.Link>
    </Card>
  );
};
