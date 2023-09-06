//https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
function lengthOfLongestSubstring(str){
    const set = new Set();
    let left = 0;
    let maxLength = 0;
    for(let idx in str){
        while(set.has(str[idx])){
            set.delete(str[left]);
            left++;
        }
        set.add(str[idx]);
        maxLength = Math.max(maxLength , idx-left +1)
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring("abcdcabcd"))