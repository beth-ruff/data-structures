//push the value into the values property on the heap
//bubble up...
    //create a variable called index which is the length of the values property - 1
    //create a variable called parentIndex which is the floor of (index-1/2)
    //keep looping as long as the values element at the parentIndex is less than the values element at the child index
        //swap the value of the values element at the parentIndex with the value of the element property at the child index
        //set the index to be the parentIndex, and start over!

class MaxBinaryHeap {
    constructor(){
        this.values = []
    }

    bubbleUp(value){
        let index = this.values.length - 1;
        while(index > 0){
            let parentIndex = Math.floor((index - 1)/2);
            let parent = this.values[parentIndex]
            if(element > parent){
                this.values[parentIndex] = value;
                this.values[index] = parents;
                index = parentIndex;
            }
        }
    }

    insert(value){
        this.values.push(value);
        this.bubbleUp(value)
    }

}