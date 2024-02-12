/*
https://leetcode.com/problems/number-of-employees-who-met-the-target/description/
 */

/*
Description:

There are n employees in a company, numbered from 0 to n - 1. Each employee i has worked for hours[i] hours in the
company. The company requires each employee to work for at least target hours. You are given a 0-indexed array of
non-negative integers hours of length n and a non-negative integer target.
Return the integer denoting the number of employees who worked at least target hours.
 */

/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */

/*
Space complexity: O(1)
Time complexity: O(n)
 */

const numberOfEmployeesWhoMetTarget = function (hours, target) {
    return hours.filter(x => x >= target).length;
};

module.exports = {
    numberOfEmployeesWhoMetTarget
}
