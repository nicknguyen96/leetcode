// Head Data Structure (Min Heap)
// API
//  - insert()
//  - poll()

class MinHeap {
    #element = [];

    constructor(arr) {
        this.#element = arr;
    }
    // helper function for indices
    getLeftChildIdx = (parentIdx) => 2 * parentIdx + 1;
    getRightChildIdx = (parentIdx) => 2 * parentIdx + 2;
    getParentIdx = (childIdx) => Math.floor((childIdx - 1) / 2);
    leftChild = (idx) => this.#element(this.getLeftChildIdx(idx));
    rigthChild = (idx) => this.#element(this.getRightChildIdx(idx));
    parent = (idx) => this.#element(this.getParentIdx(idx))

    // Return root node without removing
    peek = () => {
        if (this.#element.length === 0) throw Error("No elements in heap");
        return this.#element[0];
    }

    pool = () => {
        if (this.#element.length === 0) throw Error("No elements in the heap");
        let root = this.#element[0]; // get the root
        let popped = this.#element.pop();
        if (this.#element.length > 0) {
            // add bottom right most element to top of heap
            this.#element[0] = popped;
        }
        this.#heapifyDown();
        return root;
    }

    // insert an element
    insert = (val) => {
        this.#element.push(val);
        this.#heapifyUp();
    }

    // Rebalance the heap from the last child up
    #heapifyUp = () => {
        let idx = this.#element.length - 1;

        // while we have parents and the parent is larger than current element, swap
        while ( this.getParentIdx(idx) >= 0 && this.parent(idx) > this.#element[idx]){
            const parentIdx = this.getParentIdx(idx);
            [
                this.#element[idx],
                this.#element[parentIdx]
            ] = [
                this.#element[parentIdx],
                this.#element[idx]
            ];
            idx = parentIdx;
        }
    }

    // Rebalance the heap from the root node down
    // Swap each child and parent until each node is smaller than its childrent
    #heapifyDown = () => {
        let idx = 0;
        // while we have children, keep walking down
        while (this.getLeftChildIdx(idx) < this.#element.length) {
            let smallerChildIdx = this.getLeftChildIdx(idx);
            // if we have right child, get it
            if (this.getRightChildIdx(idx) < this.#element.length
                && this.getRightChildIdx(idx) < this.getLeftChildIdx(idx)) {
                    smallerChildIdx = this.getRightChildIdx(idx);
            }

            // if  the element is smaller than its child, our work is done
            if (this.#element[idx] < this.#element[smallerChildIdx]){
                break;
            } else {
                // let temp = this.#element[idx];
                // this.#element[idx] = this.#element[smallerChildIdx];
                // this.#element[smallerChildIdx] = temp;
                [
                    this.#element[idx],
                    this.#element[smallerChildIdx]
                ] = [
                    this.#element[smallerChildIdx],
                    this.#element[idx]
                ];
            }
            idx = smallerChildIdx;
        }
    }
}

let input = [1,2,3,4,5];
console.log((new MinHeap(input)).pool());