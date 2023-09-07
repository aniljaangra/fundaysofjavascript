function mergeSortedList(list1 , list2){
    let [i,j] = [0,0];
    let merged = [];
    while(i < list1.length && j < list2.length){
        if(list1[i] < list2[j]){
            merged.push(list1[i]);
            i++;
        }else if(list1[i] === list2[j]){
            merged.push(list1[i]);
            merged.push(list1[i]);
            i++;
            j++;
        }else{
            merged.push(list2[j]);
            j++;
        }
    }
    return merged.concat(list1.slice(i)).concat(list2.slice(j));
}

console.log(mergeSortedList([1,2,4,5,6,7], [1,3,4,7]))