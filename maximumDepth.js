// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2
 

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100

const maxDepth = root => {
  let depthMax = 0;
  if(!root) return 0;

  const maxdepth = (root, depth) => {
    depthMax = Math.max(depthMax, depth);
    
    root.left && maxdepth(root.left, depth + 1);
    root.right && maxdepth(root.right, depth + 1);
  }

  maxdepth(root, 0);
  return depthMax + 1; // return depth of the subtree rooted at root
}

[3,9,20,null,null,15,7]
const tree = { val: 3, left: {val :9, left :null, right:null}, right: { val: 20, left: { val: 15, left: null, right: null }, right: {val : 7, left:null, right:null} } }

console.log(maxDepth(tree))