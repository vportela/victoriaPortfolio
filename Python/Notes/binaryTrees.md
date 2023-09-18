# Binary Trees

## What is a Binary tree?

Ok so if you look at a tree it creates a pyramid shape of sorts. A binary tree is sort of like this. 

There is a root which has children. Those children become parents of the next children, so on and so forth. 

### every node (leaf on the tree) can only have 1 parent but can have many children. 

Trees in computer science are hierarchical data structures that consist of "nodes" connected by "edges".
It's called a tree because, visually, it looks like an upsidedown tree with a series of branching paths. 


Binary tree: a type of tree where each node has at most two children, traditionally labeled "left" and "right".

## Components of a binary tree: 

1. Node
  * The primary building blocks of a binary tree
  * contains value/data (usually a number, can sometimes be words/letters)
  * contains a reference/pointer to the left child node.
  * contains a reference/pointer to the right child node.
3. Root
  * The top node in the tree
  * The entry point for any operations (like traversal) we cant to conduct on the tree.
4. Leaf
  * Nodes that don't have any children (usually the bottom row, but i'm assuming this can technically happen anywhere)

## Why are binary trees important?
They serve has the basis for a bunch of different types of more complicated data structures like: 
  * binary search trees
  * heaps
  * balanced trees (like AVL trees) (idk what that means)
These trees offer efficient ways to search, insert, and delete values.
They are foundational for algorithms and other concepts in computer science.

## Types of binary trees

1. Full Binary Tree: Every node has 0 or 2 children.
2. Complete Binary Tree: All levels, except possibly the last are fully filled. All nodes are left as possible (idk what this means)
3. Perfect binary tree: Full and complete. All leaf nodes are at the same level, and this level has the max number of nodes.
4. Balanced Binary tree: The depth of two subtrees of every node never differ by more than 1.
5. Binary Search Tree: for each node, all elements in the left subtree are less than the node. and all elements in the right subtree are greater than the node (i'm assuming this means left is less than current node, right is greater than current node. This happens not just in binary search trees as far as I know)

## Basic Operations 
1. Insertion: adding a new node.
2. Deletion: Removing a node.
3. Traversal: Visiting all the nodes in a specific order.

## Tree Traversals: 
1. in-order (LNR):
   * Traverse the left subtree.
   * Visit root node.
   * Traverse the right subtree
3. Pre-order (NLR):
   * Visit the root node.
   * Traverse the left subtree.
   * Traverse the right subtree.
5. Post-order (LRN):
   * Traverse the left subtree.
   * Traverse the right subtree.
   * Visit the root node
7. Level Order:
   * visit nodes level by level