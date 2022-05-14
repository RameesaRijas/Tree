// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]
 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

//left -> val -> right

const inorderTraversal = (root) => {
  let output = [];
  if (!root) return [];

  //recursive
  const traverse = root => {
    root.left && traverse(root.left)
    output.push(root.val);
    root.right && traverse(root.right)
  }

  traverse(root)

  //iterative

  // const stack = [];
  // let current = root;

  // while(current || stack.length) {
  //   //get all left
  //   while(current) {
  //     stack.push(current);
  //     current = current.left
  //   }

  //   current = stack.pop()
  //   output.push(current.val);
  //   current = current.right
  // }


  return output;
}

const tree = { val: 1, left: null, right: { val: 2, left: { val: 3, left: null, right: null }, right: null } }

console.log(inorderTraversal(tree));