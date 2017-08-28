import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import PostsList from './PostsList';
import CategoriesList from './CategoriesList';

class PostsMain extends Component {
    render() {
        return (
            <Row>
                <Col md={2}>
                    Categories
                    <CategoriesList />
                </Col>
                <Col md={10}>
                    <Link to="posts/new">Create Post</Link>
                    <PostsList />
                </Col>
            </Row>
            );
    }
}

export default PostsMain;