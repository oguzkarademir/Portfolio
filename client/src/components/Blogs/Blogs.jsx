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
                                    <div className="spinner-border text-success m-5" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
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
