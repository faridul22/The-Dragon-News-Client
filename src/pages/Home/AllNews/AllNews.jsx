import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'
const AllNews = () => {
    return (
        <div>
            <Row xs={1} md={1} lg={1} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses ForSpring</Card.Title>
                            <Card.Text className='text-muted '>
                                <small> <FaRegCalendarAlt></FaRegCalendarAlt> Jan 4, 2022</small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={second} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses ForSpring</Card.Title>
                            <Card.Text className='text-muted '>
                                <small> <FaRegCalendarAlt></FaRegCalendarAlt> Jan 4, 2022</small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={third} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses ForSpring</Card.Title>
                            <Card.Text className='text-muted '>
                                <small> <FaRegCalendarAlt></FaRegCalendarAlt> Jan 4, 2022</small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AllNews;