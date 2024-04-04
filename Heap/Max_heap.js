class Maxheap{
    constructor(){
        this.heap=[]
    }


    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }
    heapifyUp(index){
        let parentIndex = Math.floor((index-1)/2)
        if(index >0&&this.heap[index] > this.heap[parentIndex]){
            [this.heap[index],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[index]]
            this.heapifyUp(parentIndex)
        }
    }
    display(){
        return console.log(this.heap)
    }
}

const heaps = new Maxheap()

heaps.insert(57)
heaps.insert(23)
heaps.insert(11)  
heaps.insert(53)
heaps.insert(99)
heaps.insert(234)
heaps.display()