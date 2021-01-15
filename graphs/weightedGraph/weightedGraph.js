class WeightedGraph {
    construtor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) 
            return this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2, weight){
        this.adjacencyList[v1].push({node:v2, weight});
        this.adjacencyList[v2].push({node:v1, weight});
    }
}
