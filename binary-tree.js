/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(node = this.root) {
    if (!node) return 0

    let left = this.minDepth(node.left)
    let right = this.minDepth(node.right)

    return 1 + Math.min(left, right)
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root) {
    if (!node) return 0

    let left = this.maxDepth(node.left)
    let right = this.maxDepth(node.right)

    return 1 + Math.max(left, right)

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0

    const helper = (node) => {
      console.log('node is', node)
      if (node === null) {
        return 0
      }
      let left = helper(node.left)
      console.log('left is', left)
      let right = helper(node.right)
      console.log('right is', right)
      //this is the whole tree, do we want the whole tree?
      result = Math.max(result, left + right + node.val, left + node.val, right + node.val)
      console.log('result is', result)
      //or do we want a part of the tree to return? to combine with other nodes
      return Math.max(0, node.val + left, node.val + right)//we can only traverse
      //down one path, so we choose none of this, or the left path or the right path

    }

    helper(this.root)

    return result
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound, node = this.root, lowest = null) {
    //have to traverse all of the nodes to see the smallest num that is larger than lowerBound
    if (!this.root) return null
    if (!node) return 99
    let left = this.nextLarger(lowerBound, node.left, lowest)
    let right = this.nextLarger(lowerBound, node.right, lowest)

    if (node.val > lowerBound) {

      if (!lowest) {

        lowest = node.val
      } else if (node.val > lowest) {
        lowest = node.val
      }

    }


    if (!lowest && (left === 99 || left === null) && (right === 99 || right === null)) return null
    if (lowest && left && !right) return Math.min(lowest, left)
    if (lowest && right && !left) return Math.min(lowest, right)
    console.log('last should be here')
    if (lowest && !left && !right) return lowest
    return Math.min(lowest, left, right)

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    //use breadth first 
    let currentNode = this.root
    let parents = [this.root]
    let children = []

    while (parents.length > 0) {

      if (currentNode.left == node1 || currentNode.right == node2 && currentNode.right == node1 || currentNode.right == node2) {
        //found it but it is the same parent 
        return false
      }
      if ((currentNode.left == node1 || currentNode.left == node2) && (currentNode.right != node1 && currentNode.right != node2) ||
        (currentNode.right == node1 || currentNode.right == node2) && (currentNode.left != node1 && currentNode.left != node2)) {
        //only one child has a node, see if the other toTraverse has the other one
        toTraverse.pop()
        currentNode = toTraverse[toTraverse.length - 1]
      }
      toTraverse.pop()
      //if this node has a left or right put it in toTraverse
      if (currentNode.left !== null) {

        toTraverse.push(currentNode.left)
      }
      if (currentNode.right !== null) {

        toTraverse.push(currentNode.right)
      }
      currentNode = toTraverse[toTraverse.length - 1]
    }
    return false
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
