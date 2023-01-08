/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var postorder = function(root) {
    const out = [];
    const traverse = (node) => {
        if (!node) {
            return;
        }

        for (const item of node.children) {  
            traverse(item);
        }    
        out.push(node.val);    
        
    }
    traverse(root);
    return out;    
};