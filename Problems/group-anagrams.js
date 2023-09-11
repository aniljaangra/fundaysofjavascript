
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

//  implementation 2
var groupAnagram = function(strs) {
    let res = {};
    for (let str of strs) {
        let count = new Array(26).fill(0);
        for (let char of str) count[char.charCodeAt()-97]++;
        let key = count.join("#");
        res[key] ? res[key].push(str) : res[key] = [str];
    }
    return Object.values(res);
};


var isValidAnagram = function(s, t) {
    if (s.length != t.length) return false;

    t = t.toLowerCase();
    s = s.toLowerCase();

    let resT=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let resS=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    for (let i=0; i<t.length; i++)
        resT[t.charCodeAt(i)-97] += 1;

    for (let i=0; i<t.length; i++)
        resS[s.charCodeAt(i)-97] += 1;

    return JSON.stringify(resT) === JSON.stringify(resS);
};