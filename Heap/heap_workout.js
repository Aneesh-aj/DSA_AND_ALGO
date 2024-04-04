class Maxheap{
   constructor(){
     this.heap = []
   }
   insert(value){
     this.heap.push(value)
     this.heapifyUp(this.heap.length-1)
   }
   heapifyUp(index){
       const parent = Math.floor((index-1)/2)
       if(index >0&& this.heap[index] > this.heap[parent]){
           [this.heap[index],this.heap[parent]] = [this.heap[parent],this.heap[index]]
           this.heapifyUp(parent)
       }
   }
   display(){
     return console.log(this.heap)
   }

   remove(){
      if(this.heap.length ===0){
        return null
      }
      if(this.heap.length === 1){
         return this.heap.pop()
      }
      const max = this.heap[0]
      console.log(this.heap[0])
      this.heap[0] = this.heap.pop()
      this.heapifyDown(0)
      return max
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