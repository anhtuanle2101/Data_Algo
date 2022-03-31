class Node{
    constructor(value){
        this.value = value;
        this.children = [];
    }
}

class Graph{
    constructor(){
        this.nodes = [];
    }
    static DFS(graphNode){
        if (graphNode === null) return;
        console.log(graphNode.value);
        graphNode.visited = true;
        for (let node of graphNode.children){
            if (node.visited === false){
                this.DFS(node);
            }
        }
    }

    static BFS(graphNode){
        const queue = new Queue();
        graphNode.marked = true;
        queue.enqueue(graphNode);

        while (!queue.isEmpty()){
            const r = queue.dequeue();
            console.log(r.value);
            for (let node of r.children){
                if (node.marked === false){
                    this.marked = true;
                    queue.enqueue(node);
                }
            }
        }
    }
}