//create a variable which is the result of the get method at the index passed to the function
//if the get method returns a valid node, set the value of that node to be the value passed to the function
//return true
//otherwise, return false

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

    get(idx){
        if(idx < 0 || idx >= this.length) return null;
        if(idx <= this.length/2){
            let count = 0;
            let current = this.head;
            while(count !== idx){
                current = current.next;
                count++;
            }
        } else {
            let count = this.length - 1;
            let current = this.tail;
            while(count !== idx){
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(idx, val){
        let foundNode = this.get(idx)
        if(foundNode != null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
}