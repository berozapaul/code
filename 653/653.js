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
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
    let found = false; 
    const map = {}

    const traverse = (node) => {
        if (!node) return;

        const num = k - node.val;
        if (map[num]) {
            found = true; 
            return;
        } else {
            map[node.val] = true;
        }

        traverse(node.left);
        traverse(node.right);
    };

    traverse(root);
    return found;
};