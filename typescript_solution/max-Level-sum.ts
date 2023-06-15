
// Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.
// Return the smallest level x such that the sum of all the values of nodes at level x is maximal.


//Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function max_Level_Sum(root: TreeNode | null): number {
    if (root == null) return 0;

    let level = 1;
    let ans = [root.val, level];
    //Starting with root node.
    let queue: TreeNode[] = [root];

    //Run loop through tree nodes untill last level
    while (queue.length) {
        const nextLevelQueue: TreeNode[] = [];
        let currSum = 0;

        //loop through tree nodes of same level
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            currSum += node.val;

            if (node.left) {
                nextLevelQueue.push(node.left);
            }
            if (node.right) {
                nextLevelQueue.push(node.right);
            }
        }
        //Current level sum will be checked against the previous level sum and the max value will be updated accordingly
        if (currSum > ans[0]) {
            ans = [currSum, level];
        }

        level++; // increment the level counter
        queue = nextLevelQueue; //next set of nodes to loop through
    }

    return ans[1];
};