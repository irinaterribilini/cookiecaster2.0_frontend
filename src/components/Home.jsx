import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';


export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Welcome to my life</h2>
                    <p>this is how we do it</p>
                    <Link to="/about">
                        <Button bsStyle="primary">About</Button>
                    </Link>
                </Jumbotron>
               <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="assets/person-1.jpg" circle className="profile-pic" />
                        <h3>Frank</h3>
                        <p>Blabla the balblablabalbl</p>
                    </Col>
                   <Col xs={12} sm={4} className="person-wrapper">
                       <Image src="assets/person-2.jpg" circle className="profile-pic" />
                       <h3>Frank</h3>
                       <p>Blabla the balblablabalbl</p>
                   </Col>
                   <Col xs={12} sm={4} className="person-wrapper">
                       <Image src="assets/person-3.jpg" circle className="profile-pic" />
                       <h3>Frank</h3>
                       <p>Blabla the balblablabalbl</p>
                   </Col>
               </Row>
            </Grid>
        )
    }
}