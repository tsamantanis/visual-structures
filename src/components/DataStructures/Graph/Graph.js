import React from "react";
import squares from "../../Helpers/squares";
import dots from "../../Helpers/dots";
import SVGInline from "../../Helpers/SVGInline";
import Vertex from './Vertex';

let visited = [];

class Graph {
    constructor() {
        this.vertices = []
    }

    addVertex(vertex) {
        this.vertices.push(vertex)
    }

    dfs(vertex) {
        visited.push(vertex);
        vertex.neighbors.map((neighbor) => {
            if (!visited.includes(neighbor)) {
                this.dfs(neighbor);
            }
        })
    }

    // numPrereqs(course) {
    //     let courseVertex = null
    //     this.vertices.forEach((vertex) => {
    //         if (vertex.data === course) {
    //             courseVertex = vertex;
    //         }
    //     });
    //     this.dfs(courseVertex);
    //     return visited
    // }

    displayGraph() {
        return (
            <div className="row">
                { this.vertices.map((vertex, index) => {
                    return (
                        <div className="col-4" key={vertex.id}>
                            <div className="graph-item" key={vertex.data}>
                                <img
                                    src={squares[index % this.vertices.length]}
                                    className="isometric-square img-fluid"
                                    alt="Isometric square"
                                />
                            </div>
                        </div>
                )})}
            </div>
        );
    }
}

export default Graph;
