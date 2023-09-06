function isPalindrome(list){
    return list.split('').reverse().join('') === list
}

function longestPalindrome(str){
    for(let left in str){
        let right = str.length-1;
        while(left < right){
            if(isPalindrome(str.slice(left , right+1))){
                return str.slice(left , right+1)
            }
            right--;
        }
    }
}

console.log(longestPalindrome('hellolleeee'))
