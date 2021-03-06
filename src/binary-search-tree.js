// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // Wraps the input value in a new BinarySearchTree and
  // assigns it to either the left or right subtree,
  // depending on its value
  insert(value) {
    const newNode = new BinarySearchTree(value);
    if (value < this.value) {
      if (this.left === null) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (this.value === target) return true;
    if (this.left && this.left.contains(target)) return true;
    if (this.right && this.right.contains(target)) return true;
    return false;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    if (this.value) cb(this.value);
    if (this.left && this.left.depthFirstForEach(cb)) cb(this.value);
    if (this.right && this.right.depthFirstForEach(cb)) cb(this.value);
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    if (this.value) cb(this.value);
    if (this.left) cb(this.left.value);
    if (this.right) cb(this.right.value);

    if (this.left) {
      if (this.left.left) this.left.left.breadthFirstForEach(cb);
      if (this.left.right) this.left.right.breadthFirstForEach(cb);
    }

    if (this.right) {
      if (this.right.left) this.right.left.breadthFirstForEach(cb);
      if (this.right.right) this.right.right.breadthFirstForEach(cb);
    }
  }
}

module.exports = BinarySearchTree;
