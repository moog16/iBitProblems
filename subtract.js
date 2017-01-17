function Node(data) {
	this.data = data;
	this.next = null;
}

function getLength(a) {
  var length = 1;
  if(!a) return 0;
  if(!a.next) return 1;

  while(a.next) {
    a = a.next;
    length++;
  }
  return length;
}

function getSubtractNode(node, nodeIndex, size) {
  var subtractNode = node;
  var subtractIndex = size - 2*nodeIndex - 1;
  for(var i=0; i<subtractIndex; i++) {
    subtractNode = subtractNode.next;
  }
  return subtractNode;
}

function subtract(a) {
  var size = getLength(a);
  var currentNodeIndex = 0;
  var currentNode = a;
  var midPoint = Math.floor(size/2);
  switch(size) {
    case 0:
      return;
    case 1:
      return a;
  }

  while(currentNodeIndex < midPoint) {
    var subtractNodeData = getSubtractNode(currentNode, currentNodeIndex, size).data;
    currentNode.data = subtractNodeData - currentNode.data;
    currentNodeIndex++;
    currentNode = currentNode.next;
  }
  return a;
}

// var a = new Node(2);
// var b = new Node(4);
// var c = new Node(6);
// var d = new Node(3);
// var e = new Node(7);
//
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
//
// var z = new Node(1);
//
// console.log(subtract(z));
