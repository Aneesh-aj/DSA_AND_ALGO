class Queue{
    constructor(){
        this.queue = new Array()
    }
    enqueue(value){
       return this.queue.push(value)
    }
    dequeue(){
       return this.queue.shift()
    }
    reverse(){
        if(this.queue.length <=1){
            return
        }
        const temp = this.dequeue()
        this.reverse()
        this.enqueue(temp)
    }
}


const que1 = new Queue()

que1.enqueue(3)
que1.enqueue(2)
que1.enqueue(9)
que1.enqueue(8)
console.log(que1);
console.log("========================>");
que1.dequeue()
console.log(que1);
que1.reverse()
console.log("=========================>");
console.log(que1)