//function accepts a starting node
//create a list to store the end result, to be returned at the very end
//create an object to store visited vertices
//create a helper function which accepts a vertex
    //helper should return early if the vertex is empty
    //helper should place the vertex it accepts into the visited object and push that vertex into the result array
    //loop over all values in the adjacencyList for that vertex
    //if any of those values have not been visited, recursively invoke the helper function with that vertex
//invoke the helper function with the starting vertex
//return the result array

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

    depthFirstRecursive(start){
        let result = [];
        let visited = {};
        let adjacencyList = this.adjacencyList;
        function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            })
        }
        dfs(start);
        return result;
    }
    
}

