class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }

    push(val){
        const newNode = new Node(val);
        if (this.size === 0){
            this.top = newNode;
            this.bottom = newNode;
            this.size++;
            return;
        }
        this.top.next = newNode;
        this.top = newNode;
        this.size++;
    }

    pop(){
        if (this.size === 0) return -1;
        let topNode = this.top;
        if (this.size === 1){
            this.top = null;
            this.bottom = null;
            this.size = 0;
            return topNode;
        }
        let currentNode = this.bottom;
        while (currentNode.next.next !== null){
            currentNode = currentNode.next;
        } 
        let tempNode = this.top;
        currentNode.next = null;
        this.top = currentNode;
        this.size--;
        return tempNode.val;
    }

    size(){
        return this.size;
    }

    print(){
        if (this.size === 0){ console.log("Stack is empty"); return;};
        if (this.size === 1){ console.log(`Stack(${this.size}): ${this.bottom.val}`); return};
        if (this.size > 1){
            let printString = `Stack(${this.size}): `;
            printString += this.bottom.val;
            let currentNode = this.bottom;
            while(currentNode.next !== null){
                currentNode = currentNode.next;
                printString += `->${currentNode.val}`
            }
            if (currentNode.next !== null) printString += this.top.val;

            console.log(printString);
        }
    }
}


const newStackInstance = new Stack();

newStackInstance.push(1);
newStackInstance.push(2);
newStackInstance.push(3);
newStackInstance.print();

console.log(newStackInstance.pop());
newStackInstance.print();

console.log(newStackInstance.pop());
newStackInstance.print();

newStackInstance.push(0);
newStackInstance.push(100);
newStackInstance.print();
