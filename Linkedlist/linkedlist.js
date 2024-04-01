class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Linkedlist{
    constructor(){
        this.head = null
        this.tail = null
    }

    insert(value){
        const node = new Node(value)

        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
    }

    display(){
        let curr = this.head
        while(curr){
            console.log(curr.value)
            curr = curr.next
        }
    }
}

const list = new Linkedlist()

list.insert(3)
list.insert(9)
list.insert(55)
list.insert(88)
list.insert(6)


list.display()