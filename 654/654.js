/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var constructMaximumBinaryTree = function(nums) {
    const maxBST = (arr) => {
        if (arr.length == 0) {
            return null;
        }
        
        const maxValue = Math.max(...arr);
        const maxIndex = arr.indexOf(maxValue);
        const root = new TreeNode(maxValue);
        root.left = maxBST(arr.slice(0, maxIndex));
        root.right = maxBST(arr.slice(maxIndex + 1));
        return root;
    }

    return maxBST(nums)
};