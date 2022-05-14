// Example 1:
// Input: root = [1,null,2,3]
// Output: [3,2,1]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]
 

// Constraints:

// The number of the nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

///postorder left-> right -> node

/**
 * 
 * @param {*} root 
 * @returns 
 */
const postorderTraversal = root => {
  let output = [];

  if(!root) return [];

  // recursive
  const traverse = root => {
    root.left && traverse(root.left)
    root.right && traverse(root.right)
    output.push(root.val)
  }

  traverse(root)

  /******* iterative *******/
  /**
   * 
   */
  // const stack = [];
  // let current = root;

  // while(current || stack.length) {
  //   while(current) {
  //     stack.push(current);
  //     current = current.left
  //   }

  //   //get last node
  //   const node = stack[stack.length - 1];
  //   // need to traverse right subtree if it exists
  //   if(node.right) {
  //     current = node.right;
  //     node.right = null
  //   } else {
  //     output.push(stack.pop().val)
  //   }
  // }


  return output;
}


//tree easy implementation
const tree = { val: 1, left: null, right: { val: 2, left: { val: 3, left: null, right: null }, right: null } }

console.log(postorderTraversal(tree));