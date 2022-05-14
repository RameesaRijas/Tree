// Given the root of a binary tree, return the preorder traversal of its nodes' values.
// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,2,3]

// Example 2:
// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]
 

// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
 

// Follow up: Recursive solution is trivial, could you do it iteratively?
/**
 * 
 * @param {*} root 
 * @returns 
 */
const preorderTraversal = (root) => {

  //initiating empty array
  let output = [];

  //check if root is empty 
  if(!root)  return [];
  //recursive function 

  const traverse = (root) => {
    // insert into output
    output.push(root.val);
    //check for left and right
    (root.left) && traverse(root.left);
    (root.right) && traverse(root.right);
  }

  traverse(root);

  //iterative - 
  // const stack = [];
  // let current = root;
  // while(current || stack.length) {
  //   while(current) {
  //     //insert value and get all left
  //     output.push(current.val);
  //     stack.push(current);
  //     current = current.left;
  //   }

  //   current = stack.pop();
  //   current = current.right;
  // }
  return output;

}


//tree easy implementation
const tree = { val: 1, left: null, right: { val: 2, left: { val: 3, left: null, right: null }, right: null } }

console.log(preorderTraversal(tree));
