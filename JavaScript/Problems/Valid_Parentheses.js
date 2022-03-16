/**
 * @param {string} s
 * @return {boolean}
 */


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
    append(val){
        const newNode = new Node(val);
        if (this.size === 0){
            this.top = newNode;
            this.bottom = newNode;
            this.size = 1;
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
            return topNode.val;
        }
        let currentNode = this.bottom;
        while (currentNode.next !== this.top){
            currentNode = currentNode.next;
        }
        this.top = currentNode;
        currentNode.next = null;
        this.size--;
        return topNode.val;
    }
    peek(){
        return this.top? this.top.val : null;
    }
}

let isValid = function(s) {
    let stack = new Stack();
    let hash = {
        "(":")",
        "{":"}",
        "[":"]"
    }
    for (let char of s){
        // if char is open parenthesis, add to the top of the stack
        if (char === "(" || char === "{" || char === "["){
            stack.append(char);
        }
        // if char is a close parenthesis, peek the top of the stack if it matches, pop from the stack
        else if (char === ")" || char === "}" || char === "]"){
            //if (stack.size === 0) return false;
            if (char === hash[stack.peek()]){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    if (stack.size === 0) return true;
        return false;
};
