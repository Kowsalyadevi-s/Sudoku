
const Sudoku =  require('./Sudoku.js')



//  import Sudoku from "./Sudoku.js"

const table =[ 
    [0,7,2,0,3,6,4,0,0],
    [0,9,0,7,0,0,0,3,5],
    [0,0,0,1,8,0,0,0,2],
    [2,0,6,0,0,0,0,9,0],
    [3,0,5,0,9,0,6,0,8],
    [0,4,0,0,0,0,5,0,1],
    [7,0,0,0,2,3,0,0,0],
    [1,5,0,0,0,4,0,8,0],
    [0,0,8,6,1,0,9,7,0]
]
     var sudokuObj = new Sudoku(table);
     sudokuObj.printSudoku(table)
     sudokuObj.findIndex(table,0)
     sudokuObj.columnPossibleValue(table);
    //  sudokuObj.findValue(table,rowPossibe,columnPossible)
    // sudokuObj.gridPossibleValue(table)
    


    //
    
    // [ 4, 5, 6, 8, 9 ]


    // [ 1, 5, 8, 9 ]
    // [ 1, 2, 4, 6, 8 ]...........
    // [ 3, 4, 5, 6, 7, 9 ]
    // [ 2, 3, 6, 7, 8, 9 ]........

    // [ 2, 3, 4, 5 ]..........

