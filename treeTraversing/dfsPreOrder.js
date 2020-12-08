//create a variable to store the values of nodes visited
//store the root of the BST in a variable called current
//write a helper function which accepts a node
    //push the value of the node to the variable that stores the values
    //if the node has a left property, recursively call the helper function with the left property on the node
    //if the node has a right property, recursively call the helper function with the right property on the node
//invoke the helper function with the current variable
//return the array of values

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

    dpsPreOrder(){
        let finalList = [];
        let current = this.root;
            function traverse(node) {
                finalList.push(node.value);
                if(node.left) traverse(node.left);
                if(node.right) traverse(node.right);
            }
        traverse(current);
        return finalList;
    }

}