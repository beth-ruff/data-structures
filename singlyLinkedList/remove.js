class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;

    }

    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
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

    remove(idx){
        if(idx < 0 || idx >= this.length) return undefined;
        if(idx === this.length - 1){
            this.pop();
        }
        if(idx === 0){
            this.shift();
        }
        let prev = this.get(idx - 1);
        let removed = prev.next;
        prev.next = removed.next;
        length--;
        return removed;
    }
}