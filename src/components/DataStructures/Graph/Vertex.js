class Vertex {
    constructor(id, data) {
        this.id = id;
        this.data = data;
        this.neighbors = [];
    }

    addNeighbor(vertex) {
        this.neighbors[vertex.id] = vertex;
    }
}

export default Vertex;
