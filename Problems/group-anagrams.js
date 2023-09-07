
const isAnagram = (str1, str2) => {
    const map = new Map();
    for(let char of str1){
        map.set(char,true);
    }
    for(let char of str2){
        if(!map.has(char)){
            return false;
        }
    }
    return true;
}

// console.log(isAnagram('eat','tan'))
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const flagSet = Array(strs.length).fill(false);
    const anagrams = [];
    strs.forEach((str , idx) =>{
        const currAnagrams = [str]
        if(!flagSet[idx]){
            for(let i=idx+1;i<strs.length-1;i++){
                if(strs[i].length !== str.length){
                    continue;
                }
                const anagram = isAnagram(str, strs[i]);
                if(anagram){
                    flagSet[i] = anagram;
                    currAnagrams.push(strs[i]);
                }
            }
            anagrams.push(currAnagrams);
        }
        flagSet[idx] = true;
    })
    return anagrams;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));