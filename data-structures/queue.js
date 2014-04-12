// Queue, implemented via a doubly linked list
//  Could also have been implemented also with an array, using push and unshift methods
//	methods: push, pop, size

function Node(data) {
	this.data = data;
}

function Queue(node) {
    this.head = node || null;
    this.tail = node || null;
}

Queue.prototype.push = function(node) {
	// set the new node's prev to the Queue's tail
	node.prev = this.tail;
	node.next = null;

	// set the Queue's tail to the new node
	this.tail.next = node;
	this.tail = node;
};

Queue.prototype.pop = function() {
	var firstItem = this.head;
	this.head = firstItem.next;
	this.head.prev = null;

	return firstItem;
};

Queue.prototype.size = function() {
	// todo: we could probably move the head and tail at the same time for O(n/2)
	var head = this.head;
	var size = 1;

	while (head.next !== null) {
		head = head.next;
		size++;
	}

	return size;
};

Queue.prototype.print = function() {
	var current = this.head;

	while (current.next !== null) {
		console.log(current.data);
		current = current.next;
	}

	console.log(current.data);
};

var head = new Node("my first node");
var queue = new Queue(head);
var someNode = new Node("second node");
var thirdNode = new Node("third node");


console.log('-------------------- QUEUES --------------------');
console.log('---------- push ----------');

queue.push(someNode);
queue.push(thirdNode);
queue.push(new Node('fourth node'));
queue.push(new Node('fifth node'));
queue.print();


console.log('---------- pop ----------');

console.log('Popped item: ', queue.pop());
console.log('New Queue:');
queue.print();


console.log('---------- size ----------');

console.log(queue.size());
