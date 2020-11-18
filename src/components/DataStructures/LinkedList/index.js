
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

let list = new LinkedList();
list.preppend(4);
list.preppend(9);
list.printList();
list.deleteFromTail();
// process.stdout.write(String(list.getHead().data));
list.deleteFromTail();
list.printList();
// list.insertAtHead(6);
// list.insertAtHead(1);
// list.insertAtHead(0);
// list.printList();
// reverse(list);
// list.printList();
