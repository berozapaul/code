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
 * @return {boolean}
 */
 var evaluateTree = function(root) {
    const dfs = (r) => {
        if(!r.left && !r.right) {
            return r.val;
        }

        if (r.val === 2) {
            return dfs(r.left) || dfs(r.right);
        } else if (r.val === 3) {
            return dfs(r.left) && dfs(r.right);
        }
    }
    
    return dfs(root);
};