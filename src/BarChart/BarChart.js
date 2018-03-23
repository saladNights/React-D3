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
        const node = this.node;
        const dataMax = max(this.props.data);
        const yScale = scaleLinear()
            .domain([0, dataMax])
            .range([0, this.props.size[1]]);
        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .enter()
            .append('rect');

        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .exit()
            .remove();

        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .style('fill', '#7f528c')
            .attr('x', (d,i) => i * (this.props.size[1]/this.props.data.length))
            .attr('y', d => this.props.size[1] - yScale(d))
    .attr('height', d => yScale(d))
            .attr('width', this.props.size[1]/this.props.data.length)
    };
    render() {
        return <svg ref={node => this.node = node}
                    width={500} height={500}>
        </svg>
    }
}

export default BarChart