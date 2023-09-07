
function searchWord(matrix, word){
    let exists = false;
    const find = (x,y,wordIdx)=>{
        if(wordIdx > word.length-1 || word[wordIdx] !== matrix[x]?.[y]){
            // console.log('rejecting',x,y)
            return ;
        }
        console.log(x,y)
        matrix[x][y] = '';
        find(x-1,y,wordIdx+1);
        find(x+1,y,wordIdx+1);
        find(x,y+1,wordIdx+1);
        find(x,y-1,wordIdx+1);
        matrix[x][y] = word[wordIdx];
        if(wordIdx === word.length-1){
            exists = true;
        }
    }

    for(let i in matrix){
        for(let j in matrix[i]){
            find(+i,+j,0);
            if(exists){
                return true;
            }
        }
    }

}


console.log(searchWord([
    ['a','d','i','k'],
    ['o','o','n','m'],
    ['n','n','e','d'],
    ['r','k','e','f']
],'done'))