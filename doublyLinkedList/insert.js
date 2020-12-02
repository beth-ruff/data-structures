//if the index is less than 0 or greater than or equal to the length return false;
//if the index is 0, unshift;
//if the index is the same as the length, push;
//use the get method to access the index -1;
//set the next and prev properties on the correct nodes to link everything together;
//increment the length
//return true

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
        if(idx < 0 || idx >= this.length) return false;
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
}
