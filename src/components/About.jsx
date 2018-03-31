import React, {Component} from 'react'
import {Grid, Col, Image} from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <Image src="assets/dog-people.jpg" className="header-image" />
                <Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/person-1.jpg" className="about-profile-pic" rounded />
                        <h3> Frank the Tank</h3>
                        <p>
                            Left till here away at to whom past. Feelings laughing at no wondered repeated provided
                            finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude
                            affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she
                            ignorant desirous two has. Called played entire roused though for one too. He into walk roof
                            made tall cold he. Feelings way likewise addition wandered contempt bed indulged.
                        </p>
                    </Col>
                </Grid>
            </div>
        )
    }
}