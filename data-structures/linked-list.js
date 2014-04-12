function Node(data, next) {
	this.data = data;
	this.next = next || null;
}

function LinkedList(head) {
    this.head = head;
}

LinkedList.prototype.addNode = function(node) {
	var current = this.head;
	while (current.next !== null) {
		current = current.next;
	}

	current.next = node;
};

LinkedList.prototype.traverseNodes = function() {
	var current = this.head;
	while (current.next !== null) {
		console.log(current.data);
		current = current.next;
	}
	console.log(current.data);
};

LinkedList.prototype.removeNode = function(node) {
	var current = this.head;
	while (current.next !== null) {
		if (current.next === node) {
			current.next = current.next.next;
		}
        current = current.next;
	}
};

LinkedList.prototype.findMiddle = function() {
    var slow = this.head;
    var fast = this.head;
    var middle = 1;
    
    if (!this.head) {
        console.log('Empty nodelist has no middle');
        return;
    }

    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        middle++;
    }
    console.log('Middle Item is at location: ', middle);
    console.log('Middle Item: ', slow);
};

LinkedList.prototype.isCorrupt = function() {
	var node = this.head;

	while (node.next !== null && !node.next.visited) {
		node = node.next;
		node.visited = true;
	}

	if (node.next === null) {
		console.log("not corrupt");
	} else {
		console.log("currupted at node: ", node);
	}
};

var head = new Node("my first node");
var list = new LinkedList(head);
var someNode = new Node("second node");
var thirdNode = new Node("third node");


console.log('-------------------- LINKED LISTS --------------------');
console.log('---------- adding nodes ----------');

list.addNode(someNode);
list.addNode(thirdNode);
list.addNode(new Node('fourth node'));
list.addNode(new Node('fifth node'));
list.traverseNodes();


console.log('---------- finding the middle ----------');
list.findMiddle();
var secondHead = new Node("my node");
var secondList = new LinkedList(secondHead);
secondList.findMiddle();

console.log('---------- removing nodes ----------');

list.removeNode(someNode);
list.traverseNodes();


console.log('---------- corrupt list ----------');

list.isCorrupt();
list.addNode(someNode);
list.isCorrupt();
