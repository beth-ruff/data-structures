//create a queue (array) and a variable to store the values of nodes visited
//place the root node in the queue
//loop as long as there is anything in the queue
    //dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    //if there is a left property on the node dequeued - add it to the queue
    //if there is a right property on the node dequeued - add it to the queue
//return the variable that stores the value

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    breadthFirstSearch(){
        let queue = [];
        let finalList = [];
        queue.push(this.root);
        while(queue.length){
            let node = queue.shift();
            finalList.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return finalList;
    }
    
}