// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []


const levelorderTraversal = root => {
  if(!root) return [];

  let output = [];
  //recursive
  const traverse = (root, depth) => {
    const level = output[depth];

    //if already have array insert into that or create new
    if(!level) output[depth] =[root.val];
    else level.push(root.val);

    //traverse next level
    root.left && traverse(root.left, depth + 1)
    root.right && traverse(root.right, depth + 1)
  }

  traverse(root, 0);

  //iterative
  /****
   * 
   */
  // const queue = [root];

  // while(queue.length) {
  //   let levelSize = queue.length;
  //   let levelNode = [];
  //   for(let i = 0; i < levelSize; i++) {
  //     let current = queue.shift();
  //     levelNode.push(current.val);
  //     if (current.left) queue.push(current.left);
  //     if (current.right) queue.push(current.right);
  //   }
  //   output.push(levelNode);
  // }

  return output;
}

//tree easy implementation
[3,9,20,null,null,15,7]
const tree = { val: 3, left: {val :9, left :null, right:null}, right: { val: 20, left: { val: 15, left: null, right: null }, right: {val : 7, left:null, right:null} } }

console.log(levelorderTraversal(tree));