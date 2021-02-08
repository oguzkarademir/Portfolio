import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { BlogCard } from "./BlogCard"
import { useDispatch, useSelector } from "react-redux";
import { getAllArticles } from "../../redux/actions/articleActions";



export const Blogs = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllArticles());
    }, []);

    const data = useSelector((state) => state.articles.articles);

    console.log(data)

    return (
        <Row>
            {
            data.length === 0 ? (
                                    <Col className="d-flex align-items-center justify-content-center" 
                                    style={{
                                    width:"100%",
                                    color:"#a3a3a3a9",
                                    marginTop:"50px",
                                    fontSize:"32px"}}>
                                        I will be adding content soon
                                    </Col>
            ) : (
                                    data.map((article) => {
                                        return (
                                                <Col xs={12} md={6} className="d-flex justify-content-center">
                                                    <BlogCard key={article.createdAt} article={article} />
                                                </Col>
                                                )   
                                    })
            )
            }
        </Row>
    )
}
