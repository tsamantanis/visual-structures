import React, { Component } from "react";
import squares from "../../Helpers/squares";
import Graph from "../Graph/Graph";
import Vertex from "../Graph/Vertex";
import GraphSVG from '../../../assets/Graph Visual.svg';

const graph = new Graph();
const vertex1 = new Vertex(1, "Web 1.0")
const vertex2 = new Vertex(2, "Web 1.1")
const vertex3 = new Vertex(3, "FEW 1.2")
const vertex4 = new Vertex(4, "FEW 2.3")
const vertex5 = new Vertex(5, "FEW 2.5")

vertex5.addNeighbor(vertex4)
vertex4.addNeighbor(vertex2)
vertex4.addNeighbor(vertex3)

vertex3.addNeighbor(vertex2)

vertex2.addNeighbor(vertex4)

vertex1.addNeighbor(vertex2)
vertex1.addNeighbor(vertex3)

graph.addVertex(vertex1)
graph.addVertex(vertex2)
graph.addVertex(vertex3)
graph.addVertex(vertex4)
graph.addVertex(vertex5)
class GraphDiagram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            graph: graph,
        };
    }

    render() {
        return (
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-lg-8">
                    <img className="img-fluid" src={ GraphSVG } alt="Graph SVG animation" />
                </div>
            </div>
        );
    }
}

export default GraphDiagram;
