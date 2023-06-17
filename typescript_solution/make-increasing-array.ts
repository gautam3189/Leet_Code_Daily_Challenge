/**
Given two integer arrays arr1 and arr2, return the minimum number of operations (possibly zero) needed to make arr1 strictly increasing.

In one operation, you can choose two indices 0 <= i < arr1.length and 0 <= j < arr2.length and do the assignment arr1[i] = arr2[j].

If there is no way to make arr1 strictly increasing, return -1.

https://leetcode.com/problems/make-array-strictly-increasing/description/
*/
function makeArrayIncreasing(arr1: number[], arr2: number[]): number {
    arr2.sort((a, b) => a - b);

    let pairs = new Map();

    function findNumber(value: number) {
        let left = 0;
        let right = arr2.length - 1;
        if (arr2[right] <= value) {
            return -1;
        }
        //Loop to get number lower than the value passed in parameter
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            const num = arr2[mid];
            if (num > value) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return arr2[left]
    }

    function dfs(i: number, prev: number): number {
        if (i == arr1.length) return 0;

        const key = `${i},${prev}`;
        if (pairs.has(key)) return pairs.get(key);

        let cost = Infinity;

        if (arr1[i] > prev) {
            cost = dfs(i + 1, arr1[i]);
        }

        const min = findNumber(prev);
        if (min !== -1) {
            cost = Math.min(cost, 1 + dfs(i + 1, min))
        }
        //Cost will be set to infinity if there is no suitable match found.
        pairs.set(key, cost);
        return cost;
    }

    let answer = dfs(0, -1);
    return answer < Infinity ? answer : -1;
}

