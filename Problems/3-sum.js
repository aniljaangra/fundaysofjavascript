function threeSum(list , target){
    const combinations = [];
    for(let left in list){
        let [middle , right] = [left+1,list.length-1];
        while(middle < right){
            const sum = list[left] +list[middle] +list[right]; 
            if(sum === target){
                combinations.push(`${list[left]},${list[middle]},${list[right]}`);
                middle++;
            }else if(sum > target ){
                right--;
            }else{
                middle++;
            }
        }
    }
    return [...new Set(combinations)];
}

console.log(threeSum([1,2,4,5,7,8,9,11,12,13],21))