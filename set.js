class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
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
}