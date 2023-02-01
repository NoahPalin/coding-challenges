/*
For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:
Input: str1 = "LEET", str2 = "CODE"
Output: ""
*/

const gcdOfStrings = (str1, str2) => {
  const str1Length = str1.length;
  const str2Length = str2.length;
  if (!str1.includes(str2)) {
    return '';
  } else if (str1Length % str2Length === 0) {
    return str2;
  }

  for (let i = 0; i < str2Length; i++) {
    
  }

};

gcdOfStrings('ABABAB', 'ABAB');