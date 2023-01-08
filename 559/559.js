/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
 var maxDepth = function(root) {
    let max = -1;
    const depth = (node, level) => {
        if (!node) {
            return 0;
        }
        if (level > max) {
            max = level;
        }
        for(const item of node.children) {
            depth(item, level + 1);
        }       
    }
    depth(root, 0);
    return 1 + max;
};