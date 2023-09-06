function twoSum(list , target){
    const combinations = [];
    let [i , j] = [0,list.length-1];
    for(let i in list){
    while(i < j){
        if(list[i] + list[j] === target){
            combinations.push(`${list[i]},${list[j]}`);
            i++;
        }else if(list[i] + list[j] > target){
            j--;
        }else{
            i++;
        }
    }
    return [...new Set(combinations)];
}
}


console.log(twoSum([2,5,7,11,15,19,20],26))
