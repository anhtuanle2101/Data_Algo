class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(value){
        this.root = new Node(value);
    }

    static inOrderTraversal(treeNode){
        if (treeNode !== null){
            this.inOrderTraversal(treeNode.left);
            console.log(treeNode.value);
            this.inOrderTraversal(treeNode.right);
        }
    }

    static preOrderTraversal(treeNode){
        if (treeNode !== null){
            console.log(treeNode.value);
            this.preOrderTraversal(treeNode.left);
            this.preOrderTraversal(treeNode.right);
        }
    }

    static postOrderTraversal(treeNode){
        if (treeNode !== null){
            this.postOrderTraversal(treeNode.left);
            this.postOrderTraversal(treeNode.right);
            console.log(treeNode.value);
        }
    }
}