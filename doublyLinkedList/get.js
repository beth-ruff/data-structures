//if the index is less than 0 or greater or equal to the length, return null
//if index is less than or equal to half the length of the list, loop through the list starting from the head and loop towards the middle
    //return the node once it is found
//if index is greater than half the length of the list, loop through the list starting from teh tail and loop towards middle
    //return the node once it is found

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
}