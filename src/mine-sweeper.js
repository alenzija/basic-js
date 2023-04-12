const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result=matrix.map(items=>items.map(item=>0));
  //проверка следующих и предыдущих
  for(let i=0; i<matrix.length; i++){
    for(let j=0;j<matrix[i].length -1; j++){
      if(matrix[i][j+1] === true) result[i][j]++;
    }
    for(let j=1; j<matrix.length;j++){
      if(matrix[i][j-1] === true) result[i][j]++;
    }
  }
  //Проверка вверху и вверху по диагонали
  for(let i=1; i<matrix.length; i++){
    for(let j=0;j<matrix[i].length; j++){
      if(matrix[i-1][j] === true) result[i][j]++;
    }
    for(let j=1;j<matrix[i].length; j++){
      if(matrix[i-1][j-1] === true) result[i][j]++;
    }
    for(let j=0;j<matrix[i].length-1; j++){
      if(matrix[i-1][j+1] === true) result[i][j]++;
    }
  }
  // Проверка внизу и внизу по диагонали
  for(let i=0; i<matrix.length -1; i++){
    for(let j=0;j<matrix[i].length; j++){
      if(matrix[i+1][j] === true) result[i][j]++;
    }
    for(let j=1;j<matrix[i].length; j++){
      if(matrix[i+1][j-1] === true) result[i][j]++;
    }
    for(let j=0;j<matrix[i].length-1; j++){
      if(matrix[i+1][j+1] === true) result[i][j]++;
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
