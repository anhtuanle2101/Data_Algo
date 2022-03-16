const LinkedList = require("./LinkedList");

test("jest testing is working", ()=>{
    expect(2+2).toBe(4);
})

let linkedListSample;

beforeEach(()=>{
    linkedListSample = new LinkedList();
})

test("append and traverse successfully the values from the Linked List", ()=>{
    expect(linkedListSample.size).toBe(0);
    
    // Append the values 1, 2, 3
    linkedListSample.append(1);

    expect(linkedListSample.traverse()).toEqual("1");
    
    linkedListSample.append(2);
    linkedListSample.append(3);

    expect(linkedListSample.size).toEqual(3);

    expect(linkedListSample.traverse()).toEqual("1 2 3");
})