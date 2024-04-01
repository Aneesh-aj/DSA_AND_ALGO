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

    insert(value){
        const node = new Node(value)

        if(!this.root){
            this.root = node
        }else{
            this.insertNode(this.root,value)
        }
    }
    insertNode(root,value){
        if(root.value > value){
            if(!root.left){
             root.left =   new Node(value)
            }else{
                this.insertNode(root.left,value)
            }
        }else{
            if(!root.right){
               root.right =  new Node(value)
            }else{
                this.insertNode(root.right,value)
            }
        }
    }

}



const bst = new BinarySearchTree();
bst.insert(3);
bst.insert(1);
bst.insert(5);
console.log(bst);