class Stack{
    constructor(){
        this.stack = new Array()
    }
    push(value){
       return this.stack.push(value)
    }
    pop(){
        return this.stack.pop()
    }
    reverse(){
        if(this.stack.length <=1){
            return
        }

        const temp = this.stack.pop()
        this.reverse()
        this.stack.push(temp)
    }
}

const stack1 = new Stack()

stack1.push(4)
stack1.push(8)
stack1.push(3)
stack1.push(6)
stack1.push(7)

console.log(stack1);
stack1.pop()
console.log(stack1)
console.log("================>");
stack1.reverse()
console.log(stack1);