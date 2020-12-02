//if length is 0, return undefined
//store current head prop in a variable (oldHead)
//if length is one: set head to null, set tail to null
//update head to be the next of the old head
//set head's prev prop to null
//set old head's next to null
//decrement length
//return old head

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

    shift(){
        if(!this.head) return undefined;
        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            oldHead.next = this.head;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
}