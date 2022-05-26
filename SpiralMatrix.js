/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let result = [];
    if (matrix.length == 0) return result;
    let colStart = 0;
    let colEnd = matrix[0].length - 1;
    let rowStart = 0;
    let rowEnd = matrix.length - 1;
    while (colStart <= colEnd && rowStart <= rowEnd) {
        for (let i = colStart; i <= colEnd; i++) {
            result.push(matrix[rowStart][i]);
        }
        rowStart++;

        for (let i = rowStart; i <= rowEnd; i++) {
            result.push(matrix[i][colEnd]);
        }
        colEnd--;

        if (rowStart <= rowEnd) {
            for (let i = colEnd; i >= colStart; i--) {
                result.push(matrix[rowEnd][i]);
            }
        }
        rowEnd--;

        if (colStart <= colEnd) {
            for (let i = rowEnd; i >= rowStart; i--) {
                result.push(matrix[i][colStart]);
            }
        }
        colStart++;
    }
    return result;
};

let input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(input)
console.log(spiralOrder(input));
console.log('------------------------------------')
let input2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
console.log(input2);
console.log(spiralOrder(input2))