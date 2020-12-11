//remove aka extractMax
//swap the first value in the values property with the last one, return value at the end
//pop from the values property
//have the new root 'sink down' to the correct spot
    //parent index starts at 0 (the root)
    //find the index of the left child: 2*index + 1
    //find the index of the right child: 2*index + 2
    //if the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child
    //the child index you swapped to now becomes the new parent index
    //keep looping and swapping until neither child is larger than the element
    //return the old root

    class MaxBinaryHeap {
        constructor(){
            this.values = []
        }

        extractMax(){
            let max = this.values[0]
            let end = this.values.pop();
            this.values[0] = end;
            //trickle down
            this.downHeap();
            return max;
        }

        downHeap(){
            let idx = 0;
            const length = this.values.length;
            const element = this.values[0]
            while(true){
                let leftChildIdx = 2 * idx + 1;
                let rightChildIdx = 2 * idx + 2;
                let swap = null;

                if(leftChildIdx < length) {
                    let leftChild = this.values[leftChildIdx];
                    if(leftChild > element) {
                        swap = leftChildIdx;
                    }
                }
                if(rightChildIx < length) {
                    rightChild = this.values[rightChildIdx];
                    if(
                        (swap === null && rightChild > element) ||
                        (swap !== null && rightChild > leftChild)
                        ) {
                            swap = rightChildIdx;
                        }
                }


                if(swap === null) break;
            }
        }


    }    

    // [45, 15, 13, 9, 7, 12, 3]