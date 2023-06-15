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
var maxLevelSum = function (root) {

    if (root === null)
        return 0;

    let maxSum = root.val;
    let cs = 0;
    let result = 1;
    var treeHeight = height(root);
    var currentLevelSum = function (root, level) {
        if (root === null)
            return cs;

        if (level == 1) {
            cs += root.val;
        }
        else if (level > 1) {
            currentLevelSum(root.left, level - 1);
            currentLevelSum(root.right, level - 1);
        }
        return cs;
    }
    for (var i = 1; i <= treeHeight; i++) {
        cs = 0;
        var d = currentLevelSum(root, i)
        if (maxSum < d) {
            result = i;
            maxSum = d;
        }
    }

    return result;
};

var height = function (root) {
    if (root == null)
        return 0;
    else {
        let lHeight = height(root.left);
        let rHeight = height(root.right);
        if (lHeight > rHeight) {
            return lHeight + 1;
        } else {
            return rHeight + 1;
        }
    }
};
