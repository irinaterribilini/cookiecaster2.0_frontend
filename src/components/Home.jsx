import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';


export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                <Row>
                    <Col xs={12} sm={8} className="main-section">
                    <h2>Willkommen beim Cookiecaster 2.0</h2>
                    <p>Möchtest Du Deine eigene persönliche Keksform kreieren?</p>
                    <Link to="/start">
                        <Button bsStyle="primary">Los geht's!</Button>
                    </Link>
                    </Col>
                    <Col xs={12} sm={4} className="main-section">
                        <Image src="assets/Pfote.png" responsive />
                    </Col>
                </Row>
            </Jumbotron>
            </Grid>
        )
    }
}