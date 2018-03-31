import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';


export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Willkommen beim Cookiecaster 2.0</h2>
                    <p>Möchtest Du Deine eigene persönliche Keksform kreieren?</p>
                    <Link to="/start">
                        <Button bsStyle="primary">Los geht's!</Button>
                    </Link>
                </Jumbotron>

            </Grid>
        )
    }
}