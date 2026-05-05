// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

const nums = [1, 2, 5, 3, 7];
const target = 9;

//Solution 1 - Brute Force
function twoSumSolutionOne(nums: number[], target: number): number[] {
  for (let a = 0; a < nums.length; a++)
    for (let b = a + 1; b < nums.length; b++)
      if (nums[a]! + nums[b]! === target) return [a, b];
  return [];
}

//Solution 2 - findIndex
function twoSumSolutionTwo(nums: number[], target: number): number[] {
  const numsArray: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]!;

    if (numsArray.findIndex((num) => num === complement) !== -1) {
      return [numsArray.findIndex((num) => num === complement), i];
    }
    numsArray.push(nums[i]!);
  }

  return [];
}

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]!;
    if (map.has(complement)) return [map.get(complement)!, i];
    map.set(nums[i]!, i);
  }

  return [];
}

console.log(nums);
console.log(target);
console.log(twoSumSolutionOne(nums, target));
console.log(twoSumSolutionTwo(nums, target));
console.log(twoSum(nums, target));
