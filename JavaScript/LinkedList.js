class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList{
    constructor(iterable = []){
        this.head = null;
        this.size = 0;
        for (let element of iterable){
            this.append(element);
        }
    }

    append(value){ 
        let newNode = new Node(value);

        if (this.size === 0){
            this.head = newNode;
            this.size ++;
            return;
        }

        let currentNode = this.head;

        while (currentNode.next !==  null){
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
        this.size ++;
    }

    traverse(){
        let traverseInText = "";
        if (!this.head) return traverseInText;
        
        let currentNode = this.head;

        while (currentNode.next !== null){
            traverseInText += currentNode.value + " ";
            currentNode = currentNode.next;
        }

        traverseInText += currentNode.value;
        
        return traverseInText;
    }
}

module.exports = LinkedList;