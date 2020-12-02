//create a new node with the val passed to function
//if length is 0, set head and tail to be new node
//otherwise, set prev prop on the head of the list to be new node
    //set next prop on the new node to be the head prop
    //update the head to be new node
//increment length
//return list

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    unshift(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            newNode = this.head;
        }
        this.length++;
        return this;
    }
}