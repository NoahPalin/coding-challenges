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
  const longStr = str1.length > str2.length ? str1 : str2;
  const shortStr = str1.length > str2.length ? str2 : str1;

  // potentialSolution holds the soltion unless another longer one is found.
  let potentialSolution = '';

  for (let i = 0; i < shortStr.length; i++) {

    // basePattern is the pattern that is being tested for repetition.
    const basePattern = shortStr.substring(0, i + 1);
    if (longStr.length % basePattern.length === 0) {

      // multiples is the number of times the basePattern needs to be repeated so that the string lengths will match.
      const multiples = longStr.length / basePattern.length;

      // How many times basePattern divides into both the long and short string.
      const longMultiples = longStr.length / basePattern.length;
      const shortMultiples = shortStr.length / basePattern.length;
      if (basePattern.repeat(longMultiples) === longStr && basePattern.repeat(shortMultiples) === shortStr) {
        potentialSolution = basePattern;
      }
    }
  }
  return potentialSolution;
};


console.log(gcdOfStrings('TAUXXTAUXXTAUXXTAUXXTAUXX', 'TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX'));