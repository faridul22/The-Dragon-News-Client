import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from '../EditorsInsight/EditorsInsight';

const News = () => {
    const newsDetails = useLoaderData()
    const { _id, title, details, image_url, category_id } = newsDetails;
    return (
        <div>
            <h5>Dragon News</h5>
            <Card className='p-3'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger" className='px-3'>
                            <FaArrowLeft></FaArrowLeft> All news in this category
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
            <EditorsInsight></EditorsInsight>
        </div>
    );
};

export default News;