//function should accept starting vertex
//create a queue (array) and place starting vertex in it
//create a result array
//create an object to store nodes visited
//mark the starting vertex as visited
//loop as long as there is anything in the queue
    //remove the first vertex from the queue and push it into the array that stores nodes visited
    //loop over each vertex in the adjacency list for the vertex you are visiting
    //if it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
    //once you have finished looping, return the array of visited nodes

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

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }

    breadthFirst(start){
        let queue = [start];
        let result = [];
        let visited = {};
        visited[start] = true;
        while(queue.length){
            let currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}