class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
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
}