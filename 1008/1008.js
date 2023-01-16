/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
 var bstFromPreorder = function(preorder) {
    const makeBST = (node) => {
        if(!node.length) {
            return null;
        }

        let root = new TreeNode(node[0]);
        root.left = bstFromPreorder(node.filter(el => el < node[0]));
        root.right = bstFromPreorder(node.filter(el => el > node[0]));
        return root;
    }

    return makeBST(preorder)
};