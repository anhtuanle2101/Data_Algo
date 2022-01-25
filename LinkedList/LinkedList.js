class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

// singly linked list
class LinkedList{
    constructor(arr = []){
        this.head = null;
        this.length = 0;
        for (let element of arr){
            console.log("adding "+element);
            this.append(element);
        }
    }

    // insert at the beginning
    shift(data){
        // created new node 
        const tempNode = new Node(data);

        // if the list is empty, point the head to the newly created node
        if (this.length == 0){
            this.head = tempNode;
            this.length++;
        }

        // otherwise, point the tempNode to the current head node then adjust the correct head pointer
        tempNode.next = this.head;
        this.head = tempNode;
        this.length++;
    }

    // append at the end
    append(data){
        // created new node 
        const tempNode = new Node(data);

        // if the list is empty, point the head to the newly created node
        if (this.length == 0){
            this.head = tempNode;
            this.length++;
        }

        // otherwise, traverse to the end of the node
        let currentNode = this.head;
        while (currentNode.next != null){
            currentNode = currentNode.next;
        }

        // then point the last node to the created tempNode
        currentNode.next = tempNode;
        this.length++;
    }

    // traverse and print the linked list
    print(){
        let currentNode = this.head;
        while (currentNode != null){
            console.log(currentNode.data+" -> ");
            currentNode = currentNode.next;
        }
    }
}


const ll = new LinkedList([1,2,3,4,5]);
ll.print();