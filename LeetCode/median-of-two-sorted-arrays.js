/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/

const findMedianSortedArrays = function (nums1, nums2) {
  let allTerms = nums1.concat(nums2);
  allTerms = allTerms.sort((a, b) => a - b);

  if (allTerms.length % 2 === 0) {
    const middleIndex = allTerms.length / 2;
    const median = (allTerms[middleIndex] + allTerms[middleIndex - 1]) / 2;
    return median;
  } else {
    const middleIndex = Math.floor(allTerms.length / 2);
    return allTerms[middleIndex];
  }
};

console.log(findMedianSortedArrays([1, 3, 5], [2, 2, 3]));