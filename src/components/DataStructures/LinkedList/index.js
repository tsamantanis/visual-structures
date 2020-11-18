
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

let list = new LinkedList();
list.append(4);
list.append(9);
list.append(11);
list.printList();
list.delete(9);
list.delete(4);
list.delete(11);
// process.stdout.write(String(list.getHead().data));
// list.delete();
list.printList();
// list.insertAtHead(6);
// list.insertAtHead(1);
// list.insertAtHead(0);
// list.printList();
// reverse(list);
// list.printList();
