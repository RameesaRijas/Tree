class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  createNode(val) {
    const newNode = new Node(val);
    if(!this.root) {
      this.root = newNode;
      return this; 
    }
    let current = this.root;
    const addSide = side => {
      if (!current[side]) {
        current[side] = newNode;
        return this;
      };
      current = current[side];
    };

    while (true) {
      if (val === current.val) return this;
      if (val < current.val) addSide('left');
      else addSide('right');
    };
  };
}

const tree = new BST();
tree.createNode(20);
tree.createNode(14);
tree.createNode(57);
tree.createNode(9);
tree.createNode(19);
tree.createNode(31);
tree.createNode(62);
tree.createNode(3);
tree.createNode(11);
tree.createNode(72);