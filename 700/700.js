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
 * @param {number} val
 * @return {TreeNode}
 */
 var searchBST = function(root, val) {
    let out = null;
    const search = (node) => {
        if (!node) {
            return null;
        }
        if (node.val === val) {
            out = node;
            return;
        }
        search(node.left);
        search(node.right);
    };

    search(root);
    return out;
};