/*
https://leetcode.com/problems/minimum-number-game/description/
 */

/*
Description:

You are given a 0-indexed integer array nums of even length and there is also an empty array arr. Alice and Bob decided to play a game where in every round Alice and Bob will do one move. The rules of the game are as follows:

Every round, first Alice will remove the minimum element from nums, and then Bob does the same.
Now, first Bob will append the removed element in the array arr, and then Alice does the same.
The game continues until nums becomes empty.
Return the resulting array arr.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
Space complexity: O(n)
Time complexity: O(n)
 */

const numberGame = function (nums) {
    nums.sort((a, b) => a - b);

    const arr = [];
    while (nums.length !== 0) {
        const temp = nums.splice(0, 2);
        arr.push(...temp.reverse());
    }

    return arr;
};

module.exports = {
    numberGame
}