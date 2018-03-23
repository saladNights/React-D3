import React, { Component } from 'react';
import './App.css';
import BarChart from './components/BarChart/BarChart';
import WorldMap from './components/WorldMap/WorldMap';
import productPerceivedQuality from './data/dailyProductPerceivedQuality';

class App extends Component {
  render() {
    return (
        <div className='App'>
            <div className='App-header'>
                <h1>React & D3</h1>
            </div>
            <div className="example">
                <h2>Bar Chart</h2>
                <BarChart data={[7,10,2,3,12,4,1,15]} size={[500,500]} />
            </div>
            <div className="example">
                <h2>Map</h2>
                <WorldMap/>
            </div>
        </div>
    );
  }
}

export default App;
