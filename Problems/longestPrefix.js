function longestCommonPrefix(list){
    let smallestString = list[0];
    list.forEach( item => {
        if(item.length < smallestString.length){
            smallestString =  item;
        }
    })
    for(let idx in smallestString){
        const isSame = list.every( item => item[idx] === smallestString[idx]);
        if(!isSame){
            return smallestString.slice(0,idx);
        }
    }
    return smallestString;
}

console.log(longestCommonPrefix(["flower","flow","flight"]))