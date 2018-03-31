import React, {Component} from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapsOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">CookieCaster 2.0</Link>
                    </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                            Home
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/start" to="/start">
                            Start
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} href="/export" to="/export">
                            Export
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} href="/galery" to="/galery">
                            Gallerie
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}