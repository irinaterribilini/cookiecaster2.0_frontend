import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Export.css';

export default class About extends Component {
    render() {
        return (
        <div>

<Image src="assets/Katze.jpg" className="header-image" />
            <Grid>
                <h2>News</h2>
                <Row>
                    <Col xs={12} sm={8} className="main-section">
                        <p>
                            Left till here away at to whom past. Feelings laughing at no wondered repeated provided
                            finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude
                            affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she
                            ignorant desirous two has. Called played entire roused though for one too. He into walk roof
                            made tall cold he. Feelings way likewise addition wandered contempt bed indulged.
                        </p>
                    </Col>
                    <Col xs={12} sm={4} className="sidebar-section">
                        <Image src="assets/hund.jpg" />
                            <p>
                                Left till here away at to whom past. Feelings laughing at no wondered repeated provided
                                finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude
                            </p>
                    </Col>
                </Row>
            </Grid>
        </div>
        )
    }
}