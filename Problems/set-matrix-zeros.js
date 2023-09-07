function setMatrixZeros(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    const zeroRows = new Set();
    const zeroCols = new Set();

    // Find rows and columns that contain zeros
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (matrix[row][col] === 0) {
                zeroRows.add(row);
                zeroCols.add(col);
            }
        }
    }

    // Set zeros in corresponding rows
    zeroRows.forEach((row) => {
        for (let col = 0; col < numCols; col++) {
            matrix[row][col] = 0;
        }
    });

    // Set zeros in corresponding columns
    zeroCols.forEach((col) => {
        for (let row = 0; row < numRows; row++) {
            matrix[row][col] = 0;
        }
    });

    return matrix;
}

function setMatrixZerosConstantSpace(matrix){
    const zeroFirstRow = matrix[0].some(item => item === 0);
    const zeroFirstColumn = matrix.some(item => item[0] === 0);
    
    for(let x in matrix){
        for(let y in matrix[x]){
            if(matrix[x][y] == 0){
                matrix[x][0] = 0;
                matrix[0][y] = 0;
            }
        }
    }

    for(let x in matrix){
        if(matrix[x][0] == 0 && x != 0){
            matrix[x] = Array(matrix[x].length).fill(0);
        }
    }

    for(let x in matrix[0]){
        if(matrix[0][x] == 0 && x!= 0){
            for(let row of matrix){
                row[x] = 0;
            }
        }
    }
    if(zeroFirstRow){
        matrix[0] = Array(matrix[0].length).fill(0);
    }
    if(zeroFirstColumn){
        for(let row of matrix){
            row[0] = 0;
        }
    }
    return matrix;
}

console.log(setMatrixZeros([
    [1, 1, 2, 1],
    [3, 4, 5, 2],
    [1, 3, 0, 5]
]));
console.log(setMatrixZerosConstantSpace([
    [1, 1, 2, 1],
    [3, 4, 5, 2],
    [1, 3, 0, 5]
]));
