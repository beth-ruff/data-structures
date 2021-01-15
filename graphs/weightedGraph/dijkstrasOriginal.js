//function should accept a starting and ending vertex
//create an object called distances and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0.
//after setting a value in the distances obj, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin.
//create another obj called previous adn set each key to be every vertex in the adjacency list with a value of null
//start looping as long as there is anything in the priority queue
    //dequeue a vertex from the priority queue
    //if that vertex is the same as the ending vertex - we are done!
    //otherwise loop through each value in the adjacency list at the vertex
        //calculate the distance to that vertex from the starting vertex
        //if the distance is less than what is currently stored in our distances obj
            //update the distances object with new lower distance
            //update the previous obj to contain that vertex
            //enqueue the vertex with the total distance from the start node

class PriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    };

    dequeue() {
        return this.values.shift();
    };

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    };
}

class WeightedGraph {
    constructor(){
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

    dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = []; //to return at end
        let smallest;
        //build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                //we are done
                //build up path to return at end
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity) {
                for(let neighbor in this.adjacencyList[smallest]){
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]) {
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        console.log(path);
        return path.concat(smallest).reverse();
    }

}