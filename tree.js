/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let final = 0
    if (this.root) {
      let currentNode = this.root
      let toTraverse = [this.root]

      while (toTraverse.length > 0) {
        //add the current Node's value to final
        final = final + currentNode.val
        //remove the current node from arr
        toTraverse.pop()
        //if current node has children, add it to the array
        if (currentNode.children) {
          currentNode.children.forEach(c => toTraverse.push(c))
        }
        //set current node to the first child
        currentNode = toTraverse[toTraverse.length - 1]
      }
    }

    return final
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let final = 0
    if (this.root) {
      let currentNode = this.root
      let toTraverse = [this.root]

      while (toTraverse.length > 0) {
        //add the current Node's value to final if the current node's value is even
        if (currentNode.val % 2 == 0) {
          final++
        }
        //remove the current node from arr
        toTraverse.pop()
        //if current node has children, add it to the array
        if (currentNode.children) {
          currentNode.children.forEach(c => toTraverse.push(c))
        }
        //set current node to the first child
        currentNode = toTraverse[toTraverse.length - 1]
      }
    }

    return final
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let final = 0
    if (this.root) {
      let currentNode = this.root
      let toTraverse = [this.root]

      while (toTraverse.length > 0) {
        //add the current Node's value to final if the current node's value is even
        if (currentNode.val > lowerBound) {
          final++
        }
        //remove the current node from arr
        toTraverse.pop()
        //if current node has children, add it to the array
        if (currentNode.children) {
          currentNode.children.forEach(c => toTraverse.push(c))
        }
        //set current node to the first child
        currentNode = toTraverse[toTraverse.length - 1]
      }
    }

    return final
  }
}

module.exports = { Tree, TreeNode };
