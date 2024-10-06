import React from 'react'

export default function Tree() {
  return (
    <div>
        <h1><b>TREE</b></h1>

        <p>
        The tree data structure is a type of graph. A tree has a root node (top node) that will have a
        <br/>
        relationship with its child nodes. The path that connects the root node to the child nodes is called
        <br/>
        a branch. The leaf node is the node that doesn’t have any children and is not the root node.
        </p>
<br/>
        <img  style={{height:"300px"}} src="https://i0.wp.com/javachallengers.com/wp-content/uploads/2022/11/tree_nomenclature.png?resize=768%2C490&ssl=1"/>
        <h4>A real-world example is the hierarchy of a company. For example:

</h4>

<img src="https://i0.wp.com/javachallengers.com/wp-content/uploads/2022/11/tree.png?resize=285%2C300&ssl=1"/>

<b><h3>Terms related to tree</h3></b>

<h4>Binary Tree</h4>
<p>A binary tree is a tree that has up to 2 child nodes. Let’s see how that works in a diagram:</p>
<img src="https://i0.wp.com/javachallengers.com/wp-content/uploads/2022/11/binary_tree.png?resize=282%2C300&ssl=1"/>
<p>
Notice that the diagram above is a binary tree because the nodes have up to 2 children at max.<br/>
 Even though node 3 has only one child that still makes the above diagram a binary tree.
</p>

<h4>Ternary Tree</h4>

<p>A ternary tree is similar to the binary tree but instead of having up to 2 child nodes, <br/>
it has up to 3 child nodes. Let’s see how this is represented in a diagram:</p>

<img src="https://i0.wp.com/javachallengers.com/wp-content/uploads/2022/11/ternary_tree.png?resize=300%2C238&ssl=1"/>

<p>
Notice in the diagram above that node 1 and node 2 has 3 child nodes. Even though node 4 has<br/>
 only one child node this also doesn’t matter, it’s still a ternary tree since the max number of child nodes is 3.




</p>

<h4>K-ary tree</h4>

<p>
The “K” represents the max number of child nodes a tree can have. For example, we can represent
<br/>
a binary tree as a 2-ary tree because both mean that the tree can have up to 2 child nodes.
<br/>
Similarly, a 3-ary tree is the same as a ternary tree
</p>
<h4>Perfect Binary Tree</h4>
<p>

    A perfect binary tree has the same depth for every child node to the leaf nodes. 
    <br/>Let’s see how to represent it in a diagram:
</p>
<img src="https://i0.wp.com/javachallengers.com/wp-content/uploads/2022/11/perfect_tree.png?resize=300%2C233&ssl=1"/>

<h4>Complete Binary Tree
</h4>

<p>
A complete binary tree contains its nodes complete for the leftmost nodes. Also, the interior
<br/>
nodes have to have two child nodes. Only the leaf nodes that are not the leftmost are allowed to
<br/>
not have child nodes.


</p>


<img src="https://i0.wp.com/javachallengers.com/wp-content/uploads/2022/11/complete_binary_tree.png?resize=300%2C269&ssl=1"/>
<p>
Remember that if the binary tree is complete only for the rightmost nodes, that wouldn’t be 
<br/>
considered a complete binary tree.
</p>


<h4>Full Binary Tree</h4>

<p>When a tree has either two or zero child nodes, it’s considered a full binary tree.
<br/>
To illustrate a full binary tree, take a look at the following diagram:

</p>

<img src="https://i0.wp.com/javachallengers.com/wp-content/uploads/2022/11/full_binary_tree.png?resize=220%2C300&ssl=1"/>

<h4>Balanced Binary Tree</h4>

<p>
A balanced tree can’t have its subtrees heights with more than 1 level of difference between the
<br/>
left and right subtrees. Let’s see an example to understand it more clearly:
</p>

<img src="https://i0.wp.com/javachallengers.com/wp-content/uploads/2022/11/balanced_tree.png?resize=252%2C300&ssl=1"/>
<p>
Notice in the diagram above that the total height of this tree is 3. The height of the left nodes 4 and
<br/>
5 is 3. The height of node 3 is 2. Therefore, the difference between the node subtrees is 1, and for
<br/>
this reason, is a balanced tree.


</p>

<br/>

<p>
The following diagram is an example of a non-balanced binary tree. That’s because the height 
<br/>
from the left subtrees is higher than 1 compared to the right subtrees:


</p>

<img src="https://i0.wp.com/javachallengers.com/wp-content/uploads/2022/11/non_balanced_tree.png?resize=208%2C300&ssl=1"/>
<p>
Note that in the diagram above node 6 has a height of 4. Node 3 which is on the right has a height of 2
<br/>.
 Therefore, the difference in the height of the nodes is higher than 1 and for this reason, the 
<br/>
tree above is not a balanced tree.


</p>
    </div>
  )
}
