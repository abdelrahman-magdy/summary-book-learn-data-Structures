function Stack() { //properties and methods go here
    let items = [];

    this.push = function (element) {
        items.push(element);
    };

    this.pop = function () {
        return items.pop();
    };

    this.peek = function () {
        return items[items.length - 1];
    };

    this.isEmpty = function () {
        return items.length == 0;
    };

    this.size = function () {
        return items.length;
    };

    this.clear = function () {
        items = [];
    };

    this.print = function () {
        console.log(items.toString());
    };

}

function TESTsTACK(params) {

    let stack = new Stack();

    stack.isEmpty()

    stack.push('one')

    stack.push('two')

    stack.push('three')

    stack.peek()

    stack.size()

    stack.print()

    stack.isEmpty()

    stack.pop()

    stack.pop()

    stack.size()
}

function divideBy2(decNumber) {

    var remStack = new Stack(),
        rem,
        binaryString = '';

    while (decNumber > 0) { //{1}
        rem = Math.floor(decNumber % 2); //{2}
        remStack.push(rem); //{3}
        decNumber = Math.floor(decNumber / 2); //{4}
    }

    while (!remStack.isEmpty()) { //{5}
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}

function baseConverter(decNumber, base) {

    var remStack = new Stack(),
        rem,
        baseString = '',
        digits = '0123456789ABCDEF'; //{6}
    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()]; //{7}
    }
    return baseString;

}


function Queue() {
    let items = [];
    //properties and methods go here
    this.enqueue = function (element) {
        items.push(element);
    }

    this.dequeue = function () {
        return items.shift();
    };

    this.front = function () {
        return items[0];
    };

    this.isEmpty = function () {
        return items.length == 0;
    };

    this.size = function () {
        return items.length;
    };

    this.print = function () {
        console.log(items.toString());
    };
}
let Queue2 = (function () {
    const items = new WeakMap();
    class Queue2 {
        constructor() {
            items.set(this, []);
        }
        enqueue(element) {
            let q = items.get(this);
            q.push(element);
        }
        dequeue() {
            let q = items.get(this);
            let r = q.shift();
            return r;
        }
        //other methods
    }
    return Queue2;
})();

function implmentQueue() {
    let queue = new Queue();
    // console.log(queue.isEmpty()); //outputs true
}

function PriorityQueue() {
    let items = [];

    function QueueElement(element, priority) { // {1}
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function (element, priority) {
        let queueElement = new QueueElement(element, priority);
        let added = false;
        for (let i = 0; i < items.length; i++) {
            if (queueElement.priority < items[i].priority) { // {2}
                items.splice(i, 0, queueElement); // {3}
                added = true;
                break; // {4}
            }
        }
        if (!added) {
            items.push(queueElement); //{5}
        }
    };

    this.print = function () {
        for (let i = 0; i < items.length; i++) {
            console.log(`${items[i].element} -
        ${items[i].priority}`);
        }
    };

    this.dequeue = function () {
        return items.shift();
    };

    this.front = function () {
        return items[0];
    };

    this.isEmpty = function () {
        return items.length == 0;
    };

    this.size = function () {
        return items.length;
    };

}

function hotPotato(nameList, num) {
    let queue = new Queue(); // {1}
    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]); // {2}
    }
    let eliminated = '';
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue()); // {3}
        }
        eliminated = queue.dequeue(); // {4}
        console.log(eliminated + ' was eliminated from the Hot Potato game.');
    }
    return queue.dequeue(); // {5}
}


//  LinkedList
function LinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
    };
    let length = 0;
    let head = null;

    this.append = function (element) {

        let node = new Node(element),
            current;
        if (head === null) {
            head = node;
        } else {
            current = head;
            //loop the list until find last item
            while (current.next) {
                current = current.next;
            }
            //get last item and assign next to node to make the link
            current.next = node; //{5}
        }
        length++; //update size of list //{6}
    }

    this.insert = function (position, element) {
        //check for out-of-bounds values
        if (position >= 0 && position <= length) {
            let node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0) { //add on first position
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++; //update size of list
            return true;
        } else {
            return false;
        }

    }

    this.removeAt = function (position) {
        //check for out-of-bounds values
        if (position > -1 && position < length) {
            let current = head,
                previous,
                index = 0;
            //removing first item
            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                //link previous with current's next: skip it to remove
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }

    };

    this.remove = function (element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    };

    this.indexOf = function (element) {
        let current = head,
            index = -1;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    this.isEmpty = function () {
        return length === 0;
    };

    this.size = function () {
        return length;
    };

    this.toString = function () {
        let current = head,
            string = '';
        while (current) {
            string += current.element + (current.next ? 'n' : '');
            current = current.next;
        }
        return string;
    };

    this.getHead = function () {
        return head;
    };

    this.print = function () {
        console.log(this.toString)
    };
}

//  DoublyLinkedList() 
function DoublyLinkedList() {

    let Node = function (element) {
        this.element = element;
        this.next = null;
        this.prev = null; //NEW
    };

    let length = 0;
    let head = null;
    let tail = null; //NEW

    //methods here
    this.insert = function (position, element) {
        //check for out-of-bounds values
        if (position >= 0 && position <= length) {
            let node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0) { //add on first position
                if (!head) { //NEW {1}
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node; //NEW {2}
                    head = node;
                }
            } else if (position === length) { //last item //NEW
                current = tail; // {3}
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                while (index++ < position) { //{4}
                    previous = current;
                    current = current.next;
                }
                node.next = current; //{5}
                previous.next = node;
                current.prev = node; //NEW
                node.prev = previous; //NEW
            }
            length++; //update size of list
            return true;
        } else {
            return false;
        }
    };

    this.removeAt = function (position) {
        //look for out-of-bounds values
        if (position > -1 && position < length) {
            let current = head,
                previous,
                index = 0;
            //removing first item
            if (position === 0) {
                head = current.next; // {1}
                //if there is only one item, update tail //NEW
                if (length === 1) { // {2}
                    tail = null;
                } else {
                    head.prev = null; // {3}
                }
            } else if (position === length - 1) { //last item //NEW
                current = tail; // {4}
                tail = current.prev;
                tail.next = null;
            } else {
                while (index++ < position) { // {5}
                    previous = current;
                    current = current.next;
                }
                //link previous with current's next - skip it
                previous.next = current.next; // {6}
                current.next.prev = previous; //NEW
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };
}

//  set dataStructures
function Set() {
    let items = {};

    this.has = function (value) {
        // return items.hasOwnProperty(value);
        return value in items;
    };

    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value; //{1}
            return true;
        }
        return false;
    };

    this.delete = function (value) {
        if (this.has(value)) {
            delete items[value]; //{2}
            return true;
        }
        return false;
    };

    this.clear = function () {
        items = {}; // {3}
    };

    this.size = function () {
        return Object.keys(items).length; //{4}
    };

    // WE ARE NOT USE THIS METHOD
    this.sizeLegacy = function () {
        // let count = 0;
        // for (let key in items) { //{5}
        //     if (items.hasOwnProperty(key)) //{6}
        //         ++count; //{7}
        // }
        // return count;
    };

    // WE ARE NOT USE THIS METHOD
    this.values = function () {
        let values = [];
        for (let i = 0, keys = Object.keys(items); i < keys.length; i++) {
            values.push(items[keys[i]]);
        }
        return values;
    };

    this.valuesLegacy = function () {
        // let values = [];
        // for (let key in items) { //{7}
        //     if (items.hasOwnProperty(key)) { //{8}
        //         values.push(items[key]);
        //     }
        // }
        // return values;
    };

}

// Dictionary is called also map (its somulate to map in es6)
function Dictionary() {

    var items = {};

    this.has = function (key) {
        return key in items;
    };

    this.set = function (key, value) {
        items[key] = value; //{1}
    };

    this.delete = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };

    this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
    };

    this.values = function () {
        var values = [];
        for (var k in items) { //{1}
            if (this.has(k)) {
                values.push(items[k]); //{2}
            }
        }
        return values;
    };

    this.clear = function () {
        items = {}; // {3}
    };

    this.size = function () {
        return Object.keys(items).length; //{4}
    };

    this.keys = function () {
        return Object.keys(items);
    };

    this.getItems = function () {
        return items;
    }
}

// HashTable with collision
function HashTable_1() {

    var table = [];

    var loseloseHashCode = function (key) {
        var hash = 0; //{1}
        for (var i = 0; i < key.length; i++) { //{2}
            hash += key.charCodeAt(i); //{3}
        }
        return hash % 37; //{4}
    };

    this.print = function () {
        for (var i = 0; i < table.length; ++i) { //{1}
            if (table[i] !== undefined) { //{2}
                console.log(i + ": " + table[i]); //{3}
            }
        }
    };

    this.put = function (key, value) {
        var position = loseloseHashCode(key); //{5}
        console.log(position + ' - ' + key); //{6}
        table[position] = value; //{7}
    };

    this.get = function (key) {
        return table[loseloseHashCode(key)];
    };

    this.remove = function (key) {
        table[loseloseHashCode(key)] = undefined;
    };

}

// HashTable (separate chaining)
function HashTable_2() {
    var table = [];

    var loseloseHashCode = function (key) {
        var hash = 0; //{1}
        for (var i = 0; i < key.length; i++) { //{2}
            hash += key.charCodeAt(i); //{3}
        }
        return hash % 37; //{4}
    };


    var ValuePair = function (key, value) {
        this.key = key;
        this.value = value;
        this.toString = function () {
            return '[' + this.key + ' - ' + this.value + ']';
        }
    };

    this.print = function () {
        for (var i = 0; i < table.length; ++i) { //{1}
            if (table[i] !== undefined) { //{2}
                console.log(i + ": " + table[i]); //{3}
            }
        }
    };

    // this.put = function (key, value) {
    //     var position = loseloseHashCode(key); //{5}
    //     console.log(position + ' - ' + key); //{6}
    //     table[position] = value; //{7}
    // };

    this.put = function (key, value) {
        var position = loseloseHashCode(key);
        if (table[position] == undefined) { //{1}
            table[position] = new LinkedList();
        }
        table[position].append(new ValuePair(key, value)); //{2}
    };

    // this.get = function (key) {
    //     return table[loseloseHashCode(key)];
    // };

    this.get = function (key) {
        var position = loseloseHashCode(key);
        if (table[position] !== undefined) { //{3}
            //iterate linked list to find key/value
            var current = table[position].getHead(); //{4}
            while (current.next) { //{5}
                if (current.element.key === key) { //{6}
                    return current.element.value; //{7}
                }
                current = current.next; //{8}
            }
            //check in case first or last element
            if (current.element.key === key) { //{9}

                return current.element.value;
            }
        }
        return undefined; //{10}
    };

    // this.remove = function (key) {
    //     table[loseloseHashCode(key)] = undefined;
    // };

    this.remove = function (key) {
        var position = loseloseHashCode(key);
        if (table[position] !== undefined) {
            var current = table[position].getHead();
            while (current.next) {
                if (current.element.key === key) { //{11}
                    table[position].remove(current.element); //{12}
                    if (table[position].isEmpty()) { //{13}
                        table[position] = undefined; //{14}
                    }
                    return true; //{15}
                }
                current = current.next;
            }
            //check in case first or last element
            if (current.element.key === key) { //{16}
                table[position].remove(current.element);
                if (table[position].isEmpty()) {
                    table[position] = undefined;
                }
                return true;
            }
        }
        return false; //{17}
    };
}

// HashTable (linear probing)
function HashTable_3() {
    var table = [];

    var djb2HashCode = function (key) {
        var hash = 5381; //{1}
        for (var i = 0; i < key.length; i++) { //{2}
            hash = hash * 33 + key.charCodeAt(i); //{3}
        }
        return hash % 1013; //{4}
    };

    var ValuePair = function (key, value) {
        this.key = key;
        this.value = value;
        this.toString = function () {
            return '[' + this.key + ' - ' + this.value + ']';
        }
    };

    this.put = function (key, value) {
        var position = djb2HashCode(key); // {1}
        if (table[position] == undefined) { // {2}
            table[position] = new ValuePair(key, value); // {3}
        } else {
            var index = ++position; // {4}
            while (table[index] != undefined) { // {5}
                index++; // {6}
            }
            table[index] = new ValuePair(key, value); // {7}
        }
    };

    this.get = function (key) {
        var position = djb2HashCode(key);
        if (table[position] !== undefined) { //{8}
            if (table[position].key === key) { //{9}
                return table[position].value; //{10}
            } else {
                var index = ++position;
                while (table[index] === undefined ||
                    table[index].key !== key) { //{11}
                    index++;
                }
                if (table[index].key === key) { //{12}
                    return table[index].value; //{13}
                }
            }
        }
        return undefined; //{14}
    };
}


// tree
// search binary Tree
function BinarySearchTree() {

    var Node = function (key) { //{1}
        this.key = key;
        this.left = null;
        this.right = null;
    };
    var root = null; //{2}

    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) { //{4}
            if (node.left === null) { //{5}
                node.left = newNode; //{6}
            } else {
                insertNode(node.left, newNode); //{7}
            }
        } else {
            if (node.right === null) { //{8}
                node.right = newNode; //{9}
            } else {
                insertNode(node.right, newNode); //{10}
            }
        }
    };

    var inOrderTraverseNode = function (node, callback) {
        if (node !== null) { //{2}
            inOrderTraverseNode(node.left, callback); //{3}
            callback(node.key); //{4}
            inOrderTraverseNode(node.right, callback); //{5}
        }
    };

    var preOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            callback(node.key); //{1}
            preOrderTraverseNode(node.left, callback); //{2}
            preOrderTraverseNode(node.right, callback); //{3}
        }
    };

    var postOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback)
            postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }

    var minNode = function (node) {
        if (node) {
            while (node && node.left !== null) { //{2}
                node = node.left; //{3}
            }
            return node.key;
        }
        return null; //{4}
    };

    var maxNode = function (node) {
        if (node) {
            while (node && node.right !== null) { //{5}
                node = node.right;
            }
            return node.key;
        }
        return null;
    };

    this.min = function () {
        return minNode(root); //{1}
    };

    this.max = function () {
        return maxNode(root);
    };

    this.search = function (key) {
        return searchNode(root, key); //{1}
    };

    var searchNode = function (node, key) {
        if (node === null) { //{2}
            return false;
        }
        if (key < node.key) { //{3}
            return searchNode(node.left, key); //{4}
        } else if (key > node.key) { //{5}
            return searchNode(node.right, key); //{6}
        } else {
            return true; //{7}
        }
    };

    var findMinNode = function (node) {
        while (node && node.left !== null) {
            node = node.left;
        }
        return node;
    };

    var removeNode = function (node, key) {
        if (node === null) { //{2}
            return null;
        }
        if (key < node.key) { //{3}
            node.left = removeNode(node.left, key); //{4}
            return node; //{5}
        } else if (key > node.key) { //{6}
            node.right = removeNode(node.right, key); //{7}
            return node; //{8}
        } else { // key is equal to node.key
            //case 1 - a leaf node
            if (node.left === null && node.right === null) { //{9}
                node = null; //{10}
                return node; //{11}
            }
            //case 2 - a node with only 1 child
            if (node.left === null) { //{12}
                node = node.right; //{13}
                return node; //{14}
            } else if (node.right === null) { //{15}
                node = node.left; //{16}
                return node; //{17}
            }
            //case 3 - a node with 2 children
            var aux = findMinNode(node.right); //{18}
            node.key = aux.key; //{19}
            node.right = removeNode(node.right, aux.key); //{20}
            return node; //{21}
        }
    };

    this.remove = function (key) {
        root = removeNode(root, key)
    }; //{1} 

    this.insert = function (key) {
        var newNode = new Node(key); //{1}
        if (root === null) { //{2}
            root = newNode;
        } else {
            insertNode(root, newNode); //{3}
        }
    };

    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root, callback); //{1}
    };

    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback);
    };

    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(root, callback);
    };
}
//excute tree
function callTreehInOrderTraverse(params) {
    //var tree = new BinarySearchTree();
    //tree.insert(11);
    // tree.insert(7);
    // tree.insert(15);
    // tree.insert(5);
    // tree.insert(3);
    // tree.insert(9);
    // tree.insert(8);
    // tree.insert(10);
    // tree.insert(13);
    // tree.insert(12);
    // tree.insert(14);
    // tree.insert(20);
    // tree.insert(18);
    // tree.insert(25);
    // tree.insert(6);

    // function printNode(value) { //{6}
    //     console.log(value);
    // }
    // tree.inOrderTraverse(printNode);
    // output >> 3 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 18 , 20 , 25
}

function callTreehpreOrderTraverseNode(params) {
    //var tree = new BinarySearchTree();
    //tree.insert(11);
    // tree.insert(7);
    // tree.insert(15);
    // tree.insert(5);
    // tree.insert(3);
    // tree.insert(9);
    // tree.insert(8);
    // tree.insert(10);
    // tree.insert(13);
    // tree.insert(12);
    // tree.insert(14);
    // tree.insert(20);
    // tree.insert(18);
    // tree.insert(25);
    // tree.insert(6);

    // function printNode(value) { //{6}
    //     console.log(value);

    // }
    // tree.preOrderTraverse(printNode);
    // output >> "11 , 7 , 5 , 3 , 6 , 9 , 8 , 10 , 15 , 13 , 12 , 14 , 20 , 18 , 25"
}

function callTreehpreOrderTraverseNode(params) {
    //var tree = new BinarySearchTree();
    //tree.insert(11);
    // tree.insert(7);
    // tree.insert(15);
    // tree.insert(5);
    // tree.insert(3);
    // tree.insert(9);
    // tree.insert(8);
    // tree.insert(10);
    // tree.insert(13);
    // tree.insert(12);
    // tree.insert(14);
    // tree.insert(20);
    // tree.insert(18);
    // tree.insert(25);
    // tree.insert(6);

    // function printNode(value) { //{6}
    //     console.log(value);

    // }
    // tree.postOrderTraverse(printNode);
    // output >> "3 , 6 , 5 , 8 , 10 , 9 , 7 , 12 , 14 , 13 , 18 , 25 , 20"

}
// adelson-velskii and landi's tree (avl tree)
function BinarySearchTree() {

    var Node = function (key) { //{1}
        this.key = key;
        this.left = null;
        this.right = null;
    };
    var root = null; //{2}

    var heightNode = function (node) {
        if (node === null) {
            return -1;
        } else {
            return Math.max(heightNode(node.left), heightNode(node.right)) + 1;
        }
    };

    var rotationRR = function (node) {
        var tmp = node.right; //{1}
        node.right = tmp.left; //{2}
        tmp.left = node; //{3}
        return tmp;
    };

    var rotationLL = function (node) {
        var tmp = node.left; //{1}
        node.left = tmp.right; //{2}
        tmp.right = node; //{3}
        return tmp;
    };

    var rotationLR = function (node) {
        node.left = rotationRR(node.left);
        return rotationLL(node);
    };

    var rotationRL = function (node) {
        node.right = rotationLL(node.right);
        return rotationRR(node);
    };

    var insertNode = function (node, element) {
        if (node === null) {
            node = new Node(element);
        } else if (element < node.key) {
            node.left = insertNode(node.left, element);
            if (node.left !== null) {
                //verify if balancing is needed
                if ((heightNode(node.left) - heightNode(node.right)) > 1) {
                    //this code replaces line {1} from insertNode method
                    // do rotations {3}
                    if (element < node.left.key) {
                        node = rotationLL(node);
                    } else {
                        node = rotationLR(node);
                    }
                }
            }
        } else if (element > node.key) {
            node.right = insertNode(node.right, element);
            if (node.right !== null) {
                // verify if balancing is needed
                if ((heightNode(node.right) - heightNode(node.left)) > 1) {
                    // 2
                    //this code replaces line {2} from insertNode method
                    // do rotations {4}
                    if (element > node.right.key) {
                        node = rotationRR(node);
                    } else {
                        node = rotationRL(node);
                    }
                }
            }
        }
        return node;
    };
    // not used in this typr of tree
    var insertNode = function (node, newNode) {
        // if (newNode.key < node.key) { //{4}
        //     if (node.left === null) { //{5}
        //         node.left = newNode; //{6}
        //     } else {
        //         insertNode(node.left, newNode); //{7}
        //     }
        // } else {
        //     if (node.right === null) { //{8}
        //         node.right = newNode; //{9}
        //     } else {
        //         insertNode(node.right, newNode); //{10}
        //     }
        // }
    };

    var inOrderTraverseNode = function (node, callback) {
        if (node !== null) { //{2}
            inOrderTraverseNode(node.left, callback); //{3}
            callback(node.key); //{4}
            inOrderTraverseNode(node.right, callback); //{5}
        }
    };

    var preOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            callback(node.key); //{1}
            preOrderTraverseNode(node.left, callback); //{2}
            preOrderTraverseNode(node.right, callback); //{3}
        }
    };

    var postOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback)
            postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }

    var minNode = function (node) {
        if (node) {
            while (node && node.left !== null) { //{2}
                node = node.left; //{3}
            }
            return node.key;
        }
        return null; //{4}
    };

    var maxNode = function (node) {
        if (node) {
            while (node && node.right !== null) { //{5}
                node = node.right;
            }
            return node.key;
        }
        return null;
    };

    this.min = function () {
        return minNode(root); //{1}
    };

    this.max = function () {
        return maxNode(root);
    };

    this.search = function (key) {
        return searchNode(root, key); //{1}
    };

    var searchNode = function (node, key) {
        if (node === null) { //{2}
            return false;
        }
        if (key < node.key) { //{3}
            return searchNode(node.left, key); //{4}
        } else if (key > node.key) { //{5}
            return searchNode(node.right, key); //{6}
        } else {
            return true; //{7}
        }
    };

    var findMinNode = function (node) {
        while (node && node.left !== null) {
            node = node.left;
        }
        return node;
    };

    var removeNode = function (node, key) {
        if (node === null) { //{2}
            return null;
        }
        if (key < node.key) { //{3}
            node.left = removeNode(node.left, key); //{4}
            return node; //{5}
        } else if (key > node.key) { //{6}
            node.right = removeNode(node.right, key); //{7}
            return node; //{8}
        } else { // key is equal to node.key
            //case 1 - a leaf node
            if (node.left === null && node.right === null) { //{9}
                node = null; //{10}
                return node; //{11}
            }
            //case 2 - a node with only 1 child
            if (node.left === null) { //{12}
                node = node.right; //{13}
                return node; //{14}
            } else if (node.right === null) { //{15}
                node = node.left; //{16}
                return node; //{17}
            }
            //case 3 - a node with 2 children
            var aux = findMinNode(node.right); //{18}
            node.key = aux.key; //{19}
            node.right = removeNode(node.right, aux.key); //{20}
            return node; //{21}
        }
    };

    this.remove = function (key) {
        root = removeNode(root, key)
    }; //{1} 

    this.insert = function (key) {
        var newNode = new Node(key); //{1}
        if (root === null) { //{2}
            root = newNode;
        } else {
            insertNode(root, newNode); //{3}
        }
    };

    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root, callback); //{1}
    };

    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback);
    };

    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(root, callback);
    };
}
x = {
    'right': {
        'right': {
            'right': {
                'right': null
            }
        },
        'left': null
    },
    'left': {
        'right': null,
        'left': null
    }

}
// end tree

// Graph
function Graph() {

    var vertices = []; //{1}
    var adjList = new Dictionary(); //{2}

    this.addVertex = function (v) {
        vertices.push(v); //{3}
        adjList.set(v, []); //{4}
    };

    this.addEdge = function (v, w) {
        adjList.get(v).push(w); //{5}
        adjList.get(w).push(v); //{6}
    };

    this.toString = function () {
        var s = '';
        for (var i = 0; i < vertices.length; i++) { //{10}
            s += vertices[i] + ' -> ';
            var neighbors = adjList.get(vertices[i]); //{11}
            for (var j = 0; j < neighbors.length; j++) { //{12}
                s += neighbors[j] + ' ';
            }
            s += '\n'; //{13}
        }
        return s;
    };
    // graph traversals
    // -> breadth-first-search (bfs)
    // -> depth-first-search (DFS)

    var initializeColor = function () {
        var color = [];
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white'; //{1}
        }
        return color;
    };

    this.bfs = function (v, callback) {
        var color = initializeColor(), //{2}
            queue = new Queue(); //{3}
        queue.enqueue(v); //{4}
        while (!queue.isEmpty()) { //{5}
            var u = queue.dequeue(), //{6}
                neighbors = adjList.get(u); //{7}
            color[u] = 'grey'; //{8}
            for (var i = 0; i < neighbors.length; i++) { //{9}
                var w = neighbors[i]; //{10}
                if (color[w] === 'white') { //{11}
                    color[w] = 'grey'; //{12}
                    queue.enqueue(w); //{13}
                }
            }
            color[u] = 'black'; //{14}
            if (callback) { //{15}
                callback(u);
            }
        }
    };

    this.BFS = function (v) { //to find short path between vertix
        var color = initializeColor(),
            queue = new Queue(),
            d = [], //{1} //distances
            pred = []; //{2}
        queue.enqueue(v);
        for (var i = 0; i < vertices.length; i++) { //{3}
            d[vertices[i]] = 0; //{4}
            pred[vertices[i]] = null; //{5}
        }
        while (!queue.isEmpty()) {
            var u = queue.dequeue(),
                neighbors = adjList.get(u);
            color[u] = 'grey';
            for (i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    d[w] = d[u] + 1; //{6}
                    pred[w] = u; //{7}
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
        }
        return { //{8}
            distances: d,
            predecessors: pred
        };
    };
}

// test
function testGraph() {

    var graph = new Graph();
    var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; //{7}
    for (var i = 0; i < myVertices.length; i++) { //{8}
        graph.addVertex(myVertices[i]);
    }
    graph.addEdge('A', 'B'); //{9}
    graph.addEdge('A', 'C');
    graph.addEdge('A', 'D');
    graph.addEdge('C', 'D');
    graph.addEdge('C', 'G');
    graph.addEdge('D', 'G');
    graph.addEdge('D', 'H');
    graph.addEdge('B', 'E');
    graph.addEdge('B', 'F');
    graph.addEdge('E', 'I');

    console.log(graph.toString());
    // A -> B C D 
    // B -> A E F 
    // C -> A D G 
    // D -> A C G H 
    // E -> B I 
    // F -> B 
    // G -> C D 
    // H -> D 
    // I -> E

    //testy bfs
    function printNode(value) { //{16}
        console.log('Visited vertex: ' + value); //{17}
    }
    graph.bfs(myVertices[0], printNode); //{18}

}