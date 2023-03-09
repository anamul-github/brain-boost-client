import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <section className="py-5 bg-light">
            <Container fluid>
                <Row className="align-items-center">
                    <Col md={6}>
                        <h2>Learn, Grow and Succeed with Brain Boost</h2>
                        <p className="my-4">
                            Brain Boost is an innovative learning platform that offers courses on a wide range of topics, from coding and design to marketing and business. With expert instructors and engaging content, you can take your skills to the next level and achieve your goals.
                        </p>
                        <Button variant="primary" className="mr-3">Explore Courses</Button>
                        <Button variant="outline-primary">Sign Up Today</Button>
                    </Col>
                    <Col md={6}>
                        <div className="video-placeholder"></div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Home;


