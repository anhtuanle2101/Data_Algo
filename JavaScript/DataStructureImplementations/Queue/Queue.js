class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    enqueue(val){
        let newNode = new Node(val);
        if (this.size === 0){
            this.front = newNode;
            this.back = newNode;
            this.size = 1;
            return;
        }
        this.back.next = newNode;
        this.back = newNode;
        this.size++;
    }

    dequeue(){
        if (this.size === 0) return -1;
        if (this.size === 1){
            let tempNode = this.front;
            this.front = null;
            this.back = null;
            this.size = 0;
			let returnValue = tempNode.value;
			tempNode.front = null;
			tempNode.back = null;
            return returnValue;
        }
        let tempNode = this.front;
        this.front = this.front.next;
        this.size--;
		let returnValue = tempNode.val;
		//free this tempNode
		tempNode.front = null;
		tempNode.back = null;
        return returnValue;
    }

    size(){
        let currentNode = this.front;
		let count = 0;
		while (currentNode.next !== null){
			currentNode = currentNode.next;
			count++;
		}
		return count;
    }

    print(){
        if (this.size === 0){ console.log("Queue is empty"); return;};
        if (this.size === 1){ console.log(`Queue(${this.size}): ${this.front.val}`); return};
        if (this.size > 1){
            let printString = `Queue(${this.size}): `;
            printString += this.front.val;
            let currentNode = this.front;
            while(currentNode.next !== null){
                currentNode = currentNode.next;
                printString += `->${currentNode.val}`
            }
            if (currentNode.next !== null) printString += this.back.val;

            console.log(printString);
        }
    }
}

const newQueueInstance = new Queue();

newQueueInstance.enqueue(1);
newQueueInstance.enqueue(2);
newQueueInstance.enqueue(3);
newQueueInstance.print();

console.log(newQueueInstance.dequeue());
newQueueInstance.print();

console.log(newQueueInstance.dequeue());
newQueueInstance.print();

newQueueInstance.enqueue(0);
newQueueInstance.enqueue(100);
newQueueInstance.print();
