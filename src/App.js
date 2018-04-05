import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BarChart from './components/BarChart/BarChart';
import WorldMap from './components/WorldMap/WorldMap';
import MapScroller from './components/MapScroller/MapScroller';

class App extends Component {
  render() {
    return (
        <div className='App'>
            <div className='App-header'>
                <Router>
                    <Link to="/">
                        <h1>React & D3</h1>
                    </Link>
                </Router>
            </div>

            <Router>
                <div className="menu">
                    <ul>
                        <li>
                            <Link to="/barchart">BarChart</Link>
                        </li>
                        <li>
                            <Link to="/worldmap">WorldMap</Link>
                        </li>
                        <li>
                            <Link to="/mapscroller">MapScroller</Link>
                        </li>
                    </ul>
                    <hr />
                    <div className="example">
                        <Route exact path="/barchart" component={BarChart} />
                        <Route path="/worldmap" component={WorldMap} />
                        <Route path="/mapscroller" component={MapScroller} />
                    </div>
                </div>
            </Router>
        </div>
    );
  }
}

export default App;
