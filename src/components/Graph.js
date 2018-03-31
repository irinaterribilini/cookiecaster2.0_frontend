/**
 *
 * @param canvas
 * @constructor
 */
function Graph() {
    let nodeSize = 0;
    let edgeSize = 0;
    let nodes = [];
    let edges = [];
    this.svg = [];
    let svgCount = 0;

    // ============ Nodes ============
    this.nodeSize = () => nodeSize;
    this.hasNode = (id) => nodes.hasOwnProperty(id);
    this.addNode = (id, pos) => {
        if (!this.hasNode(id)) {
            nodes[id] = {pos: pos};
            nodeSize++;
        }
    };
    this.getNode = (id) => nodes[id];
    this.removeNode = (id) => {
        if (this.hasNode(id)) {
            delete nodes[id];
            nodeSize--;
        }
    };
    this.getNodes = () => nodes;

    // ============ Edges ============
    this.edgeID = (left, right) => `${left},${right}`;
    this.edgeSize = () => edgeSize;
    this.hasEdge = (id) => edges.hasOwnProperty(id);
    this.addEdge = (left, right) => {
        const id = this.edgeID(left, right);
        if (!edges.hasOwnProperty(id)) {
            const lPos = this.getNode(left).pos;
            const rPos = this.getNode(right).pos;
            this.svg[svgCount] = {x1: lPos.x, y1: lPos.y, x2: rPos.x, y2: rPos.y};
            edges[id] = {left: left, right: right, svg: svgCount};
            edgeSize++;
            svgCount++;
        }
    };
    this.getEdge = (id) => edges[id];
    this.removeEdge = (id) => {
        if (this.hasEdge(id)) {
            const edge = edges[id];
            const left = edge.left;
            const right = edge.right;

            delete edges[id];
            edgeSize--;
            this.svg.splice(edge.svg, 1);
        }

    };
    this.getEdges = () => edges;

    this.clear = () => {
        nodeSize = 0;
        edgeSize = 0;
        nodes = {};
        edges = {};
        this.svg = [];
    }
}
