//function should accept a starting node
//create a stack to keep track of vertices (use array)
//create a list to store the end result and return at the end
//create an object to store visited vertices
//add starting vertex to the stack and mark as visited
//while stack has something in it:
    //pop the next vertex from the stack
    //if that vertex hasn't been visited yet:
        //mark it as visited
        //add it to the result list
        //push all of its neighbors into the stack

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

    depthFirstIterative(start){
        let s = [];
        let result = [];
        let visited = {};
        s.push(start);
        visited[start] = true;
        while(s.length){
            let currentVertex = s.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    s.push(neighbor)
                }
            })
        }
        return result;
    }
}