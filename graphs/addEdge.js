//function accepts two verticies, v1 and v2
//the function should find in the adjacency list the key of vertex1 and push vertex2 to the array
//function should find in the adjacency list the key of vertex2 and push vertex1 to the array
//don't worry about handling errors/invalid vertices for this solution
//for directed graph, only push one vertex to the other

class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
}