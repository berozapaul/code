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
 * @return {number}
 */
 var sumRootToLeaf = function(root) {
    let sum = 0;
    const dfs = (node, numStr) => {
        if (!node) {
            return;
        }
        
        numStr += node.val;
        if (!node.left && !node.right) {
            sum += parseInt(numStr, 2);
            return;
        }        

        dfs(node.left, numStr);
        dfs(node.right, numStr);
    };

    dfs(root, '');
    return sum;
};