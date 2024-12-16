/*
* Traversing linked list
*  - Traversing linked list means moving through the linked list from the beginning to the end.
* - We can traverse a linked list by following the next pointer of each node.
*  - We can start traversing from the head node.
*  - We can stop traversing when we reach the end of the linked list.
*   - The end of the linked list is indicated by a null value in the next pointer.
*  - The time complexity of traversing a linked list is O(n), where n is the number of nodes in the linked list.
*  - The space complexity of traversing a linked list is O(1).
*  - The following code demonstrates how to traverse a linked list.
* */

// start with the code ............

class List {
    constructor(data) {
        this.head = {
            data: data, next: null
        }
        this.tail = this.head;
        this.count = 1;
    }

    appendNode(newData) {
        let newNode = {
            data: newData, next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.count++;
    }

    traverse() {
        let pinter = 0;

        let currentNode = this.head;
        while (pinter < this.count) {
            console.log(currentNode);
            currentNode = currentNode.next;
            pinter++;
        }
    }
}

const list = new List(10);
list.appendNode(20);
list.appendNode(30);
list.appendNode(40);
list.traverse();

console.log(JSON.stringify(list));