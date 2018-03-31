import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Start from './components/Start';
import Export from './components/Export';
import Navbar from './components/CustomNavbar'



class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Route exact path="/" component={Home}/>
                    <Route path="/start" component={Start}/>
                    <Route path="/export" component={Export}/>
                </div>

            </Router>
        );
    }
}

export default App;
