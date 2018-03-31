import React, {Component} from 'react'
import {Grid, Col, Row, Image} from 'react-bootstrap';
import './Start.css';

export default class Start extends Component {
    render() {
        return (
            <div>
                <Grid>
                <svg class="col-md-6" width="800" height="600" id="drawingarea">
                </svg>

                <button onclick="graph.clearCanvas()" class="btn btn-primary pull-right" id="clear">Clear</button>
                <button onclick="graph.createMesh()" class="btn btn-primary pull-right" id="createMesh">CreateMesh</button>
                </Grid>
            </div>
        )
    }
}