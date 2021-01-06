//write a method called addVertex, which accepts a name of a vertex
//it should add a key to the adjacency list with the name of the vertex and set its value to be an empty array

class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) 
            return this.adjacencyList[vertex] = [];
    }

}