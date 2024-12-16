/*
* Link List data structure
* Learn what is link list
* Learn how to create a link list
* Learn how to traverse a link list
* Learn how to insert a node in a link list
* Learn how to delete a node in a link list
* */

//learn first deep copy of an object

// let x = 14;
// let y = x;
// y= x + 15;
// console.log(y);

/*
* here x should be 14 and y should be 29
* but there is the reason that y represent the x value. y is the reference of x address. and when change the y value
* it will change the x value as well.
* */

/*
*  Link list has 5 parts
* head, tail, node, data, next
* */

//Now learn linked list with js

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
}

const list = new List(10);
list.appendNode(20);
list.appendNode(30);
list.appendNode(40);

console.log(JSON.stringify(list));
