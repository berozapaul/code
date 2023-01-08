/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    const out = [];
    const bfs = (node, level) => {
        if (!node) {
            return;
        }

        if(level === out.length) {
            out.push([])
        }

        out[level].push(node.val);
        for(const item of node.children) {
            bfs(item, level + 1);
        }
    }
    bfs(root, 0);
    return out;
};