//write a min binary heap - lower number means higher priority
//each node has a val and a priority. use the priority to build the heap
//enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
//dequeue method removes root element, returns it, and rearranges heap using priority.

class PriorityQueue {
    constructor(){
        this.values = []
    }

    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp(){
        let index = this.values.length - 1;
        const element = this.values[index];
        while(index > 0){
            let parentIndex = Math.floor((index - 1)/2);
            let parent = this.values[parentIndex]
            if(element.priority >= parent.priority) break;
                this.values[parentIndex] = element;
                this.values[index] = parent;
                index = parentIndex;
        }
    }

    dequeue(){
        let max = this.values[0]
        let end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            //trickle down
            this.downHeap();
        }
        return min;
    }

    downHeap(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0]
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let swap = null;

            if(leftChildIdx < length) {
                let leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length) {
                let rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}