class Node{
    constructor(val){
        this.val = val;
        this.next= null;
    }
}

class SinglyLinkedList{
    constructor(head){
        this.head = head;
        this.tail = this.head ? this.head : null;
        this.size = this.head ? 1: 0;
    }

    //Challenge
    reverse(){
        let currentNode = this.head;
        this.head.prev = null;
        let lastNode = currentNode;
        while(currentNode.next !== null){
            currentNode = currentNode.next;
            currentNode.prev = lastNode;
            lastNode = currentNode;
        }
        currentNode = this.tail;
        lastNode = currentNode;
        while (currentNode.prev !== null){
            currentNode = currentNode.prev;
            lastNode.next = currentNode;
            if (currentNode.prev === null){
                currentNode.next = null;
                delete lastNode.prev;
                delete currentNode.prev;
                break;
            }
            delete lastNode.prev;
            lastNode = currentNode;
        }
        let tempNode = this.head;
        this.head = this.tail;
        this.tail = tempNode;
    }

    append(val){
        const newNode = new Node(val);
        if (this.size === 0){
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }

    prepend(val){
        const newNode = new Node(val);
        if (this.size === 0){
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    insert(val, position){
        const newNode = new Node(val);
        if (position > this.size || position < 0) return -1;
        if (position === 0) this.prepend(val);
        if (position === this.size-1) this.append(val);
        let currentPosition = 0;
        let currentNode = this.head;
        while (currentPosition !== position-1){
            currentNode = currentNode.next;
            currentPosition++;
        }
        let tempNode = currentNode.next;
        currentNode.next = newNode;
        newNode.next = tempNode;
        this.size++;
    }

    remove(val){
        if (this.size === 0) return -1;
        if (this.size === 1 && this.head.val === val){
			this.head.next = null;
            this.head = null;
            this.tail = null;
            this.size = 0;
            return;
        }
        if (this.head.val === val) {
			let tempNode = this.head;
            this.head = this.head.next;
            this.size--;
			tempNode.next = null;
            return;
        }
        let currentNode = this.head;
        let lastNode = currentNode;
        while (currentNode.next !== null){
            currentNode = currentNode.next;
            if (currentNode.val === val){
				let tempNode = currentNode;
                lastNode.next = currentNode.next;
                this.tail = currentNode.next === null? lastNode: this.tail;
                this.size--;
				tempNode.next = null;
                return;
            }
            lastNode = currentNode;
        }
    }

    size(){
        return this.size;
    }

    print(){
        if (this.size === 0){ console.log("LinkedList is empty"); return;};
        if (this.size === 1){ console.log(`LinkedList(${this.size}): ${this.head.val}`); return};
        if (this.size > 1){
            let printString = `LinkedList(${this.size}): `;
            printString += this.head.val;
            let currentNode = this.head;
            while(currentNode.next !== null){
                currentNode = currentNode.next;
                printString += `->${currentNode.val}`
            }
            console.log(printString);
        }
    }
}

let newSinglyLinkedListInstance = new SinglyLinkedList();

newSinglyLinkedListInstance.append(2);
newSinglyLinkedListInstance.append(3);
newSinglyLinkedListInstance.prepend(1);
newSinglyLinkedListInstance.append(4);
newSinglyLinkedListInstance.print();

newSinglyLinkedListInstance.insert(2,1);
newSinglyLinkedListInstance.insert(5,3);
newSinglyLinkedListInstance.print();

newSinglyLinkedListInstance.remove(2);
newSinglyLinkedListInstance.remove(5);
newSinglyLinkedListInstance.print();

newSinglyLinkedListInstance.remove(4);
newSinglyLinkedListInstance.print();

newSinglyLinkedListInstance.reverse();
newSinglyLinkedListInstance.print();

newSinglyLinkedListInstance.remove(3);
newSinglyLinkedListInstance.remove(1);
newSinglyLinkedListInstance.print();



