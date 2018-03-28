import React, {Component} from 'react';
import * as d3 from 'd3';
import ReactDOM from "react-dom";
import * as topojson from "topojson";
import worldData from '../../../data/world-50m';
import trackData from '../../../data/track.json';

class MapScrollerSVG extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scrollTop: 0,
            width: 0.9 * window.innerWidth / 2,
            height: 0.9 * window.innerHeight / 2,
            scrollLength: 0
        };
    }

    componentDidMount(){

        const container = document.getElementById('container');

        this.setState({
            scrollLength: container.scrollHeight - this.state.height
        });

        const el = ReactDOM.findDOMNode(this);

        const projection = d3.geoMercator()
            .scale(5 * (this.props.width + 1) / 2 / Math.PI)
            .translate([this.props.width / 2, this.props.height / 2])
            .rotate([-125, -15, 0])
            .precision(.1);

        const graticule = d3.geoGraticule();
        const pathGenerator = d3.geoPath().projection(projection);

        d3.select(el).append("path")
            .datum(graticule)
            .attr("class", "graticule")
            .attr("d", pathGenerator);

        d3.select(el).insert("path", ".graticule")
            .datum(topojson.feature(worldData, worldData.objects.land))
            .attr("class", "land")
            .attr("d", pathGenerator);

        const pathLine = d3.line()
            .x(function(d) { return projection([d.lon, d.lat])[0]; })
            .y(function(d) { return projection([d.lon, d.lat])[1]; });

        const track = d3.select(el).append("path")
            .attr("d",pathLine(trackData))
            .attr("fill","none")
            .attr("stroke", '#ff9933')
            .attr("stroke-width", 3)
            .style('stroke-dasharray', function(d) {
                let l = d3.select(this).node().getTotalLength();
                return l + 'px, ' + l + 'px';
            })
            .style('stroke-dashoffset', function(d) {
                return d3.select(this).node().getTotalLength() + 'px';
            });

        const scrollEl = document.getElementById('container');
        scrollEl.addEventListener('scroll', this.containerScrollHandler.bind(true, track));
    }

    componentWillUnmount(){
        const scrollEl = document.getElementById('container');
        scrollEl.removeEventListener('scroll', this.containerScrollHandler);
    }

    containerScrollHandler = (track) => {
        const scrollEl = document.getElementById('container');
        const newScrollTop = scrollEl.scrollTop;

        if (this.state.scrollTop !== newScrollTop) {

            const trackScale = d3.scaleLinear()
                .domain([0, this.state.scrollLength])
                .range([0, track.node().getTotalLength()]);

            track
                .style('stroke-dashoffset', function(d) {
                    return track.node().getTotalLength() - trackScale(newScrollTop) + 'px';
                });

            this.setState({
                scrollTop: newScrollTop
            });

        }
    };

    render(){
        return (
            <svg id="map" width={this.props.width} height={this.props.height}>
            </svg>
        )
    }

}

export default MapScrollerSVG;