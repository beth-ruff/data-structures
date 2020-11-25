class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    unshift(val){
        let newNode = new Node(val)
        if(!head){
            newNode = this.head;
            this.head = this.tail;
        } else {
            newNode.next = this.head
            newNode = this.head;
        }
        this.length++;
        return this;
    }

    get(idx){
        if(idx < 0 || idx >= this.length) return null;
        let counter = 0
        let current = this.head;
        while(idx !== counter){
            current = current.next;
            counter++;
        }
        return current;
    }

    set(idx, val){
        let node = this.get(idx);
        if(node){
            node.val = val;
            return true;
        }
        return false;
    }

    insert(idx, val){
        if(idx < 0 || idx > this.length) return false;
        if(idx === this.length) return !!this.push(val);
        if(idx === 0) !!this.unshift(val);
        let newNode = new Node(val)
        let preNode = this.get(idx - 1);
        let temp = preNode.next;
        preNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
}
