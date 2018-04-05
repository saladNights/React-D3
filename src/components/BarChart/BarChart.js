import React, { Component } from 'react';
import { scaleLinear, max, select } from 'd3';

class BarChart extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.createBarChart()
    }
    componentDidUpdate() {
        this.createBarChart()
    }
    createBarChart = () => {
        const data = [7,10,2,3,12,4,1,15];
        const size = [500,500];
        const node = this.node;
        const dataMax = max(data);
        const yScale = scaleLinear()
            .domain([0, dataMax])
            .range([0, size[1]]);
        select(node)
            .selectAll('rect')
            .data(data)
            .enter()
            .append('rect');

        select(node)
            .selectAll('rect')
            .data(data)
            .exit()
            .remove();

        select(node)
            .selectAll('rect')
            .data(data)
            .style('fill', '#7f528c')
            .attr('x', (d,i) => i * (size[1]/data.length))
            .attr('y', d => size[1] - yScale(d))
    .attr('height', d => yScale(d))
            .attr('width', size[1]/data.length)
    };
    render() {
        return <svg ref={node => this.node = node}
                    width={500} height={500}>
        </svg>
    }
}

export default BarChart