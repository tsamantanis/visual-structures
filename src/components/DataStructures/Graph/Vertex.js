class Vertex {
    constructor(data) {
        this.id = id
        this.data = data
        this.neighbors = {}
    }

    addNeighbor(vertex) {
        this.neighbors[vertex.id] = vertex
    }
}
