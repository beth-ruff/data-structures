//if the index is less than 0 or greater than or equal to the length return undefined;
//if the index is 0, shift;
//if the index is the same as the length-1, pop;
//use the get method to retrieve the item to be removed;
//update the next and prev properties to remove the found node from the list;
//set next and prev to null on the found node;
//Decrement the length
//return the removed node

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
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

    insert(idx, val){
        if(idx < 0 || idx > this.length) return false;
        if(idx === this.length) return !!this.push(val);
        if(idx === 0) return !!this.unshift(val);
        let newNode = new Node(val)
        let preNode = this.get(idx - 1);
        let postNode = preNode.next;
        preNode.next = newNode;
        newNode.prev = preNode;
        newNode.next = postNode;
        postNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(idx){
        if (idx < 0 || idx >= this.length ) return undefined;
        if (idx === 0) return this.shift();
        if (idx === this.length - 1) return this.pop();
        let removedNode = this.get(idx);
        let preNode = removedNode.prev;
        let postNode = removedNode.next;
        preNode.next = postNode;
        postNode.prev = preNode;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}
