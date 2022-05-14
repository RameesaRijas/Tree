// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true
//picture in symmatric.jpg

// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false
 

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100

const isSymmatric = (root) => {
  
  const symmatricCheck = (oneSide, secondSide) => {
    if(oneSide === null && secondSide === null) return true;
    if(oneSide === null || secondSide === null) return false;

    if (oneSide.val !== secondSide.val) return false;
    return symmatricCheck(oneSide.left, secondSide.right) && symmatricCheck(oneSide.right, secondSide.left)
  }
 return symmatricCheck(root, root)
}

const tree = { val: 1, left: {val:2, left: {val:3, left:null, right:null}, right:{val:4, left:null, right:null}}, right: { val: 2, left: { val: 4, left: null, right: null }, right: {val:3, left:null, right:null} } }

const tree2 = { val: 1, 
  left: 
      {val:2, 
      left: null, right:{val:3, left:null, right:null}},
  right: 
      { val: 2, left: null, right: {val:3, left:null,      right:null} } }

console.log(isSymmatric(tree));
console.log(isSymmatric(tree2));