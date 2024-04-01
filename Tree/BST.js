class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root
    }

    insert(){
        const node = new Node(value)

        if(!this.root){
            this.root = node
        }else{
            insertNode(this.root,value)
        }
    }
    insertNode(root,value){
        if(root.value > value){
            if(!root.left){
               new Node(value)
            }else{
                insertNod
            }
        }
    }
}