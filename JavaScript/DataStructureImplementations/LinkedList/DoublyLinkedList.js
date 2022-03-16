class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    append(val){
        const newNode = new Node(val);
        if (this.size === 0){
            this.head = newNode;
            this.tail = newNode;
            this.size = 1;
            return;
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }

    prepend(val){
        const newNode = new Node(val);
        if (this.size === 0){
            this.head = newNode;
            this.tail = newNode;
            this.size = 1;
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.size++;
    }

    insert(val, position){
        let newNode = new Node(val);
        if (position > this.size || position < 0) return -1;
        if (position === 0) this.prepend(val);
        if (position === this.size-1) this.append(val);
        let currentPosition = 0;
        let currentNode = this.head;
        while (currentNode.next !== null){
            currentNode = currentNode.next;
            currentPosition++;
            if (currentPosition === position){
                newNode.prev = currentNode.prev;
                newNode.next = currentNode;
                currentNode.prev.next = newNode;
                this.size++;
                return;
            }
        }

    }

    remove(val){
        if (this.size === 0) return -1;
        if (this.size === 1 && this.head.val === val){
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
            return
        }
        let currentNode = this.head;
        while (currentNode.next !== null){
            currentNode = currentNode.next;
            if (currentNode.val === val){
				let tempNode = currentNode;
                currentNode.prev.next = currentNode.next;
                this.tail = currentNode.next === null? currentNode.prev : this.tail;
                this.size--;
				tempNode.prev = null;
				tempNode.next = null;
                return;
            }
        }
    }

    size(){
        return this.size;
    }

    nodeAtIndex(position){
        if (position > this.size || position < 0) return -1;
        if (position === 0) return this.head;
        if (position === this.size-1) return this.tail;
        let midPosition = Math.floor(this.size/2);
        if (position < midPosition){
            let currentPosition = 0;
            let currentNode = this.head;
            while (currentPosition < position){
                currentNode = currentNode.next;
                currentPosition++
            }
            return currentNode;
        }else{
            let currentPosition = this.size-1;
            let currentNode = this.head;
            while (currentPosition > position){
                currentNode = currentNode.prev;
                currentPosition--;
            }
            return currentNode;
        }
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
                printString += `<=>${currentNode.val}`
            }
            console.log(printString);
        }
    }
}

let newDoublyLinkedListInstance = new DoublyLinkedList();

newDoublyLinkedListInstance.append(2);
newDoublyLinkedListInstance.append(3);
newDoublyLinkedListInstance.prepend(1);
newDoublyLinkedListInstance.append(4);
newDoublyLinkedListInstance.print();

newDoublyLinkedListInstance.insert(2,1);
newDoublyLinkedListInstance.insert(5,3);
newDoublyLinkedListInstance.print();

newDoublyLinkedListInstance.remove(2);
newDoublyLinkedListInstance.remove(5);
newDoublyLinkedListInstance.print();

console.log(newDoublyLinkedListInstance.nodeAtIndex(1));

newDoublyLinkedListInstance.remove(4);
newDoublyLinkedListInstance.print();

newDoublyLinkedListInstance.remove(3);
newDoublyLinkedListInstance.remove(1);
newDoublyLinkedListInstance.print();
