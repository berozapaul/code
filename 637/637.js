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
 * @return {number[]}
 */
 var averageOfLevels = function(root) {
    const queue = [root];
    const out = [];
    while(queue.length > 0) {
        const size = queue.length; 
        let sum = 0;
        for(let i = 0; i < size; i++) {
            const node = queue.shift();
            sum += node.val;
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
        out.push(sum/size);
    }
    return out;
};