function buySellStocks(list){
    let profit = 0;
    let minVal = list[0];
    for(let price of list){
        minVal = Math.min(minVal , price);
        profit = Math.max(profit , price - minVal);
    }
    return profit;
}

console.log(buySellStocks([7,1,5,3,6,4]))