/**
 *
 * @param svg
 * @constructor
 */
function DrawArea(svg) {
    const area = d3.select(svg);
    const svgEdges = area.append('g');

    const MODE_BASE = 0;
    const MODE_DRAW = 1;

    const ip = 'localhost';
    const port = 8000;
    const postMesh = 'mesh';

    const graph = new Graph();
    let nodeID = 0;

    const _2pi = 2 * Math.PI;
    const r = 7.5;
    let movePoint = undefined;
    let prevPoint = undefined;
    let closed = false;
    let mode = MODE_BASE;

    let update = () => {
        console.log(graph.svg);
        const data = svgEdges.selectAll("line").data(graph.svg);
        //append new lines
        data.enter().append("line")
                .attr("x1", d => d.x1)
                .attr("y1", d => d.y1)
                .attr("x2", d => d.x2)
                .attr("y2", d => d.y2);
        //remove old lines
        data.exit().remove();
        //update lines
        data
            .attr("x1", d => d.x1)
            .attr("y1", d => d.y1)
            .attr("x2", d => d.x2)
            .attr("y2", d => d.y2);
    };

    let getMousePos = () => {
        const mouse = d3.mouse(svg);
        return {
            x: mouse[0],
            y: mouse[1]
        };
    };

    /**
     *
     * @param {object} point
     * @param {number} point.x
     * @param {number} point.y
     * @return {{id: number, pos: {x: number, y:number}} | null}
     */
    let focusPoint = (point) => {
        for (let n in graph.getNodes()) {
            const node = graph.getNode(n);
            const dx = point.x - node.pos.x;
            const dy = point.y - node.pos.y;
            if (dx * dx + dy * dy <= r * r) {
                return node;
            }
        }
        return null;
    };

    area.on('click', evt => {
        const point = getMousePos();
        const focus = focusPoint(point);
        switch (mode) {
            case MODE_BASE: {
                if (focus !== null && graph.countAdjacent(focus.id) < 2) {
                    prevPoint = focus.id;
                } else {
                    const id = nodeID++;
                    graph.addNode(id, point);
                    prevPoint = id;
                }
                mode = MODE_DRAW;
                break;
            }
            case MODE_DRAW: {
                if (focus !== null) {
                    graph.addEdge(prevPoint, focus.id);
                    if (graph.countAdjacent(focus.id) < 2) {
                        prevPoint = focus.id;
                    } else {
                        prevPoint = undefined;
                        mode = MODE_BASE
                    }
                } else {
                    const id = nodeID++;
                    graph.addNode(id, point);
                    graph.addEdge(prevPoint, id);
                    prevPoint = id;
                }
                break;
            }
        }
        movePoint = undefined;
        update();
    });

    area.on('mousemove', evt => {
        movePoint = getMousePos(evt);
    });

    area.on('keydown', evt => {
        if (mode === MODE_DRAW && evt.keyCode === 27) {
            movePoint = undefined;
            prevPoint = undefined;
            mode = MODE_BASE;
            update();
        }
    });


    // let toSVG = (points) => {
    //     const path = [];
    //     path.push(`M${points[0].x},${points[0].y}`);
    //     for (let i = 1; i < points.length; i++) {
    //         path.push(`L${points[i].x},${points[i].y}`);
    //     }
    //     return `${path.join(' ')}z`;
    // };

    this.clearCanvas = () => {
        console.log("cleared");
        graph.clear();
        movePoint = undefined;
        prevPoint = undefined;
        update();
        mode = MODE_BASE;
    };

    this.createMesh = () => {
        // temp.push({id: 0, x1: 10, y1: 10, x2: 200, y2: 10});
        // temp.push({id: 1, x1: 200, y1: 10, x2: 200, y2: 100});
        // temp.push({id: 2, x1: 200, y1: 100, x2: 10, y2: 200});
        // update();

    //     $.post(`http://${ip}:${port}/${postMesh}`, {
    //         path: toSVG(nodes),
    //         height: 10,
    //         canvasWidth: cWidth,
    //         canvasHeight: cHeight
    //     }, (data) => {
    //         console.log(data);
    //     })
    };
}
