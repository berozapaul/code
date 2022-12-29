# 1624. Largest Substring Between Two Equal Characters


Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

A substring is a contiguous sequence of characters within a string.
 

### Example 1:
```
Input: s = "aa"
Output: 0
Explanation: The optimal substring here is an empty substring between the two 'a's.
```

### Example 2:
```
Input: s = "abca"
Output: 2
Explanation: The optimal substring here is "bc".
 ```

Constraints:
```
1 <= s1.length, s2.length <= 200
s1 and s2 consist of lowercase English letters and spaces.
s1 and s2 do not have leading or trailing spaces.
All the words in s1 and s2 are separated by a single space.
```