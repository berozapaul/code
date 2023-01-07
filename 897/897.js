/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var increasingBST = function(root) {
    
    const out = new TreeNode();
    let cur = out; 

    const inOrderTraverse = (node) => {
        if (!node) {
            return;
        }

        inOrderTraverse(node.left);

        node.left = null;
        cur.right = node;
        cur = node;
        inOrderTraverse(node.right);
    }

    inOrderTraverse(root);
    return out.right;
};