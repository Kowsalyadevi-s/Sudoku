class Sudoku {
  constructor(table, zero, zeroIndex1) {
    this.table = table;
    this.zero = zero;
    this.zeroIndex1 = zeroIndex1;

    // this.printSudoku()
  }

  printSudoku(table) {
    console.log(
      "\t-------------------------------------------------------------------"
    );

    for (let i = 0; i < 8; i++) {
      var temp = "\t|";
      for (let j = 0; j < 8; j++) {
        temp = temp + table[i][j] + "\t|";
      }
      console.log(temp);

      console.log(
        "\t-------------------------------------------------------------------"
      );
    }
  }

  // printTable(table, possibles) {
  //   console.log(
  //     "\t-------------------------------------------------------------------"
  //   );

  //   for (let i = 0; i < 9; i++) {
  //     var temp = "\t|";
  //     for (let j = 0; j < 9; j++) {
  //       console.log("Table[i][j]", table[i][j]);
  //       if (table[i][j] == 0) {
  //         table[i][j].push([possibles]);
  //       }
  //       //       else(table[i][j] != 0)
  //       //       {
  //       //     temp = temp + table[i][j] + "\t|";
  //       //   }
  //     }

  //     console.log(temp);

  //     console.log(
  //       "\t-------------------------------------------------------------------"
  //     );
  //   }
  // }

  findIndex(table, zero) {
    var count = 0;

    for (let i = 0; i < 9; i++) {
      var rowPossibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      for (let j = 0; j < 9; j++) {
        if (table[i][j] != zero) {
          // var zeroIndex = [];
          // zeroIndex.push([i, j]);
          // console.log("non zero index value",zeroIndex,"Table element",table[i][j])

          for (let k = 0; k < rowPossibleValues.length; k++) {
            if (table[i][j] === rowPossibleValues[k]) {
              // var possible = possibleValues.pop(table[i][j])
              rowPossibleValues.splice(k, 1);
              // console.log("Removed Possible",removedpossible)
            }
          }
        }
        // var row = table.findIndex(i => i.includes(zero));
        // var col  = table[row].indexOf(zero);
        // console.log("Row"+row+"Column"+col);
      }

      // console.log("Row Possible Value", rowPossibleValues);
      // console.log("Row possibles",rowPossible)
      this.assignAssociateRow(rowPossibleValues, table, count);
      ++count;

      // this.columnPossibleValue(table,rowPossibleValues)
      // this.associateRowPossibleValue(table,rowPossibleValues)
    }

    // console.log("After Row possible",table)
  }

  assignAssociateRow(rowPossible, table, count) {
    // console.log("row possibles", rowPossible);

    //1st row
    if (count === 0) {
      // console.log("row possibles.........", rowPossible);

      for (let i = 0; i < 1; i++) {
        for (let j = 0; j < 9; j++) {
          if (table[i][j] === 0) {
            table[i][j] = rowPossible;
          }
        }
        // console.log(table)
      }
    }

    //2d=nd row
    else if (count === 1) {
      // console.log("row possibles.........", rowPossible);

      for (let i = 1; i < 2; i++) {
        for (let j = 0; j < 9; j++) {
          if (table[i][j] === 0) {
            table[i][j] = rowPossible;
          }
        }
        // console.log(table)
      }
    }

    //3rd row
    else if (count === 2) {
      // console.log("row possibles.........", rowPossible);

      for (let i = 2; i < 3; i++) {
        for (let j = 0; j < 9; j++) {
          if (table[i][j] === 0) {
            table[i][j] = rowPossible;
          }
        }
        // console.log(table)
      }
    }

    //4th row
    else if (count === 3) {
      // console.log("row possibles.........", rowPossible);

      for (let i = 3; i < 4; i++) {
        for (let j = 0; j < 9; j++) {
          if (table[i][j] === 0) {
            table[i][j] = rowPossible;
          }
        }
        // console.log(table)
      }
    }

    //5th row
    else if (count === 4) {
      // console.log("row possibles.........", rowPossible);

      for (let i = 4; i < 5; i++) {
        for (let j = 0; j < 9; j++) {
          if (table[i][j] === 0) {
            table[i][j] = rowPossible;
          }
        }
        // console.log(table)
      }
    }

    //6ht row
    else if (count === 5) {
      // console.log("row possibles.........", rowPossible);

      for (let i = 5; i < 6; i++) {
        for (let j = 0; j < 9; j++) {
          if (table[i][j] === 0) {
            table[i][j] = rowPossible;
          }
        }
        // console.log(table)
      }
    }

    //7th row
    else if (count === 6) {
      // console.log("row possibles.........", rowPossible);

      for (let i = 6; i < 7; i++) {
        for (let j = 0; j < 9; j++) {
          if (table[i][j] === 0) {
            table[i][j] = rowPossible;
          }
        }
        // console.log(table)
      }
    }

    //8th row
    else if (count === 7) {
      // console.log("row possibles.........", rowPossible);

      for (let i = 7; i < 8; i++) {
        for (let j = 0; j < 9; j++) {
          if (table[i][j] === 0) {
            table[i][j] = rowPossible;
          }
        }
        // console.log(table)
      }
    }

    //9th row
    else if (count === 8) {
      // console.log("row possibles.........", rowPossible);

      for (let i = 8; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (table[i][j] === 0) {
            table[i][j] = rowPossible;
          }
        }
        // console.log(table)
      }
    }
  }

  columnPossibleValue(table) {
    let count = 0;
    for (let i = 0; i < 9; i++) {
      var ColumnPossibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      for (let j = 0; j < 9; j++) {
        if (table[j][i] != 0) {
          // console.log("Find zero element",i,j)
          // var zeroIndex = [];
          // zeroIndex.push([j, i]);
          // console.log("non zero index value",zeroIndex,"Table element",table[i][j])

          for (let k = 0; k < ColumnPossibleValues.length; k++) {
            if (table[j][i] === ColumnPossibleValues[k]) {
              // var possible = possibleValues.pop(table[i][j])
              ColumnPossibleValues.splice(k, 1);
              // console.log("Removed Possible",removedPossible)
            }
          }
        }
      }
      console.log("Column Possible Value", ColumnPossibleValues);
      this.associateColumnPossible(table, ColumnPossibleValues, count);
      ++count;

      //   console.log("Column Possible Value", rowPossibleValues);

      // this.popPossibleValue(table, ColumnPossibleValues, rowPossibleValues);
    }
  }

  associateColumnPossible(table, ColumnPossibleValues, count) {
    // console.log("row possibles", columnPossible);

    //0th column
    if (count === 0) {
      console.log("Column possibles.........", ColumnPossibleValues);

      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 1; j++) {
          // console.log("Table[i][j]", table[i][j]);

          var newTable = [];
          // newTable = table[i][j].map((x) => x);
          newTable = Array.from(table[i][j]);

          // console.log("\n\n\nNew table", newTable);
          // console.log("\n Table values", table[i][j]);
          // console.log("\n Column possible values", ColumnPossibleValues);


          if( table[i][j] === 1 || table[i][j] === 2 || table[i][j] === 3
            || table[i][j] === 4 || table[i][j] === 5 || table[i][j] === 6|| table[i][j] === 7
            || table[i][j] === 8 || table[i][j] === 9){

            newTable = table[i][j];
            // console.log("NEW TABLE",newTable);
          }

          for (let k = 0; k < table[i][j].length; k++) {
            // console.log("Table old element",table[i][j][k])
            // console.log("i value",k)

            for (let x = 0; x < ColumnPossibleValues.length; x++) {
              // console.log("Table column element",ColumnPossibleValues[x])

              if (table[i][j][k] === ColumnPossibleValues[x]) {
                var flag = "true";
                // console.log("\ni of old table", table[i][j][k]);
                // console.log("\nj of columnPOssible", ColumnPossibleValues[x]);
              }
            }
            if (flag != "true") {
              // console.log("i value",k)
              // console.log("new table of i",newTable[k])
              // console.log("old table of i",table[i][j][k])

              var index = newTable.indexOf(table[i][j][k]);
              // console.log("Index", index);
              
              newTable.splice(index, 1);
              console.log("Removed element", newTable);
              
            } else if (flag === "true") {
              // console.log("In the table array", table[i][j][k]);
            }
            var flag = null;
          }
          console.log("Final Table", newTable);
          table[i][j] = newTable;

          // this.associateColumn(newTable,table)

          // console.log("**********Table [i][j]**********", table[i][j], i, j);
        }
      }
    }

    //1st column
    else if (count === 1) {
      console.log("Column possibles.........", ColumnPossibleValues);

      for (let i = 0; i < 9; i++) {
        for (let j = 1; j < 2; j++) {
          // console.log("Table[i][j]", table[i][j]);

          var newTable = [];
          // newTable = table[i][j].map((x) => x);
          newTable = Array.from(table[i][j]);

          // console.log("\n\n\nNew table", newTable);
          console.log("\n Table values", table[i][j]);
          console.log("\n Column possible values", ColumnPossibleValues);


          if( table[i][j] === 1 || table[i][j] === 2 || table[i][j] === 3
            || table[i][j] === 4 || table[i][j] === 5 || table[i][j] === 6|| table[i][j] === 7
            || table[i][j] === 8 || table[i][j] === 9){

            newTable = table[i][j];
            // console.log("NEW TABLE",newTable);
          }
          for (let k = 0; k < table[i][j].length; k++) {
            // console.log("Table old element",table[i][j][k])
            // console.log("i value",k)

            for (let x = 0; x < ColumnPossibleValues.length; x++) {
              // console.log("Table column element",ColumnPossibleValues[x])

              if (table[i][j][k] === ColumnPossibleValues[x]) {
                var flag = "true";
                // console.log("\ni of old table", table[i][j][k]);
                // console.log("\nj of columnPOssible", ColumnPossibleValues[x]);
              }
            }
            if (flag != "true") {
              // console.log("i value",k)
              // console.log("new table of i",newTable[k])
              // console.log("old table of i",table[i][j][k])

              var index = newTable.indexOf(table[i][j][k]);
              // console.log("Index", index);
              newTable.splice(index, 1);
              console.log("Removed element", newTable);
            } else if (flag === "true") {
              // console.log("In the table array", table[i][j][k]);
            }
            var flag = null;
          }
          console.log("Final Table", newTable);
          table[i][j] = newTable;

          // this.associateColumn(newTable,table)

          // console.log("**********Table [i][j]**********", table[i][j], i, j);

          // console.log("same row when declare with array",ColumnPossibleValues)

          // table[i][j]=ColumnPossibleValues
        }
      }
    }

    // 2nd col
    else if (count === 2) {
      console.log("Column possibles.........", ColumnPossibleValues);

      for (let i = 0; i < 9; i++) {
        for (let j = 2; j < 3; j++) {
          // console.log("Table[i][j]", table[i][j]);

          var newTable = [];
          // newTable = table[i][j].map((x) => x);
          newTable = Array.from(table[i][j]);

          // console.log("\n\n\nNew table", newTable);
          console.log("\n Table values", table[i][j]);
          console.log("\n Column possible values", ColumnPossibleValues);


          if( table[i][j] === 1 || table[i][j] === 2 || table[i][j] === 3
            || table[i][j] === 4 || table[i][j] === 5 || table[i][j] === 6|| table[i][j] === 7
            || table[i][j] === 8 || table[i][j] === 9){

            newTable = table[i][j];
            // console.log("NEW TABLE",newTable);
          }

          for (let k = 0; k < table[i][j].length; k++) {
            // console.log("Table old element",table[i][j][k])
            // console.log("i value",k)

            for (let x = 0; x < ColumnPossibleValues.length; x++) {
              // console.log("Table column element",ColumnPossibleValues[x])

              if (table[i][j][k] === ColumnPossibleValues[x]) {
                var flag = "true";
                // console.log("\ni of old table", table[i][j][k]);
                // console.log("\nj of columnPOssible", ColumnPossibleValues[x]);
              }
            }
            if (flag != "true") {
              // console.log("i value",k)
              // console.log("new table of i",newTable[k])
              // console.log("old table of i",table[i][j][k])

              var index = newTable.indexOf(table[i][j][k]);
              // console.log("Index", index);
              newTable.splice(index, 1);
              console.log("Removed element", newTable);
            } else if (flag === "true") {
              // console.log("In the table array", table[i][j][k]);
            }
            var flag = null;
          }
          console.log("Final Table", newTable);
          table[i][j] = newTable;

          // this.associateColumn(newTable,table)

          // console.log("**********Table [i][j]**********", table[i][j], i, j);

          // console.log("same row when declare with array",ColumnPossibleValues)

          // table[i][j]=ColumnPossibleValues
        }
      }
    }

    // 3rdcolumn
    else if (count === 3) {

      console.log("Column possibles.........", ColumnPossibleValues);

      for (let i = 0; i < 9; i++) {
        for (let j = 3; j < 4; j++) {
          // console.log("Table[i][j]", table[i][j]);

          var newTable = [];
          // newTable = table[i][j].map((x) => x);
          newTable = Array.from(table[i][j]);

          // console.log("\n\n\nNew table", newTable);
          console.log("\n Table values", table[i][j]);
          console.log("\n Column possible values", ColumnPossibleValues);


          if( table[i][j] === 1 || table[i][j] === 2 || table[i][j] === 3
            || table[i][j] === 4 || table[i][j] === 5 || table[i][j] === 6|| table[i][j] === 7
            || table[i][j] === 8 || table[i][j] === 9){

            newTable = table[i][j];
            // console.log("NEW TABLE",newTable);
          }

          for (let k = 0; k < table[i][j].length; k++) {
            // console.log("Table old element",table[i][j][k])
            // console.log("i value",k)

            for (let x = 0; x < ColumnPossibleValues.length; x++) {
              // console.log("Table column element",ColumnPossibleValues[x])

              if (table[i][j][k] === ColumnPossibleValues[x]) {
                var flag = "true";
                // console.log("\ni of old table", table[i][j][k]);
                // console.log("\nj of columnPOssible", ColumnPossibleValues[x]);
              }
            }
            if (flag != "true") {
              // console.log("i value",k)
              // console.log("new table of i",newTable[k])
              // console.log("old table of i",table[i][j][k])

              var index = newTable.indexOf(table[i][j][k]);
              // console.log("Index", index);
              newTable.splice(index, 1);
              console.log("Removed element", newTable);
            } else if (flag === "true") {
              // console.log("In the table array", table[i][j][k]);
            }
            var flag = null;
          }
          console.log("Final Table", newTable);

          table[i][j] = newTable;

          // this.associateColumn(newTable,table)

          // console.log("**********Table [i][j]**********", table[i][j], i, j);

          // console.log("same row when declare with array",ColumnPossibleValues)

          // table[i][j]=ColumnPossibleValues
        }
      }
    }

    // 4th column
    else if (count === 4) {
      console.log("Column possibles.........", ColumnPossibleValues);

      for (let i = 0; i < 9; i++) {
        for (let j = 4; j < 5; j++) {
          // console.log("Table[i][j]", table[i][j]);

          var newTable = [];
          // newTable = table[i][j].map((x) => x);
          newTable = Array.from(table[i][j]);

          // console.log("\n\n\nNew table", newTable);
          console.log("\n Table values", table[i][j]);
          console.log("\n Column possible values", ColumnPossibleValues);


          if( table[i][j] === 1 || table[i][j] === 2 || table[i][j] === 3
            || table[i][j] === 4 || table[i][j] === 5 || table[i][j] === 6|| table[i][j] === 7
            || table[i][j] === 8 || table[i][j] === 9){

            newTable = table[i][j];
            // console.log("NEW TABLE",newTable);
          }

          for (let k = 0; k < table[i][j].length; k++) {
            // console.log("Table old element",table[i][j][k])
            // console.log("i value",k)

            for (let x = 0; x < ColumnPossibleValues.length; x++) {
              // console.log("Table column element",ColumnPossibleValues[x])

              if (table[i][j][k] === ColumnPossibleValues[x]) {
                var flag = "true";
                // console.log("\ni of old table", table[i][j][k]);
                // console.log("\nj of columnPOssible", ColumnPossibleValues[x]);
              }
            }
            if (flag != "true") {
              // console.log("i value",k)
              // console.log("new table of i",newTable[k])
              // console.log("old table of i",table[i][j][k])

              var index = newTable.indexOf(table[i][j][k]);
              // console.log("Index", index);
              newTable.splice(index, 1);
              console.log("Removed element", newTable);
            } else if (flag === "true") {
              // console.log("In the table array", table[i][j][k]);
            }
            var flag = null;
          }
          console.log("Final Table", newTable);
          table[i][j] = newTable;

          // this.associateColumn(newTable,table)

          // console.log("**********Table [i][j]**********", table[i][j], i, j);


          // console.log("same row when declare with array",ColumnPossibleValues)

          // table[i][j]=ColumnPossibleValues
        }
      }
    }

    // 5h column
    else if (count === 5) {
      console.log("Column possibles.........", ColumnPossibleValues);

      for (let i = 0; i < 9; i++) {
        for (let j = 5; j < 6; j++) {
          // console.log("Table[i][j]", table[i][j]);

          var newTable = [];
          // newTable = table[i][j].map((x) => x);
          newTable = Array.from(table[i][j]);

          // console.log("\n\n\nNew table", newTable);
          console.log("\n Table values", table[i][j]);
          console.log("\n Column possible values", ColumnPossibleValues);


          if( table[i][j] === 1 || table[i][j] === 2 || table[i][j] === 3
            || table[i][j] === 4 || table[i][j] === 5 || table[i][j] === 6|| table[i][j] === 7
            || table[i][j] === 8 || table[i][j] === 9){

            newTable = table[i][j];
            // console.log("NEW TABLE",newTable);
          }

          for (let k = 0; k < table[i][j].length; k++) {
            // console.log("Table old element",table[i][j][k])
            // console.log("i value",k)

            for (let x = 0; x < ColumnPossibleValues.length; x++) {
              // console.log("Table column element",ColumnPossibleValues[x])

              if (table[i][j][k] === ColumnPossibleValues[x]) {
                var flag = "true";
                // console.log("\ni of old table", table[i][j][k]);
                // console.log("\nj of columnPOssible", ColumnPossibleValues[x]);
              }
            }
            if (flag != "true") {
              // console.log("i value",k)
              // console.log("new table of i",newTable[k])
              // console.log("old table of i",table[i][j][k])

              var index = newTable.indexOf(table[i][j][k]);
              // console.log("Index", index);
              newTable.splice(index, 1);
              console.log("Removed element", newTable);
            } else if (flag === "true") {
              // console.log("In the table array", table[i][j][k]);
            }
            var flag = null;
          }
          console.log("Final Table", newTable);
          table[i][j] = newTable;

          // this.associateColumn(newTable,table)

          // console.log("**********Table [i][j]**********", table[i][j], i, j);


          // console.log("same row when declare with array",ColumnPossibleValues)

          // table[i][j]=ColumnPossibleValues
        }
      }
    }

    //6th column
    else if (count === 6) {
      console.log("Column possibles.........", ColumnPossibleValues);

      for (let i = 0; i < 9; i++) {
        for (let j = 6; j < 7; j++) {
          // console.log("Table[i][j]", table[i][j]);

          var newTable = [];
          // newTable = table[i][j].map((x) => x);
          newTable = Array.from(table[i][j]);

          // console.log("\n\n\nNew table", newTable);
          console.log("\n Table values", table[i][j]);
          console.log("\n Column possible values", ColumnPossibleValues);

          if( table[i][j] === 1 || table[i][j] === 2 || table[i][j] === 3
            || table[i][j] === 4 || table[i][j] === 5 || table[i][j] === 6|| table[i][j] === 7
            || table[i][j] === 8 || table[i][j] === 9){

            newTable = table[i][j];
            // console.log("NEW TABLE",newTable);
          }

          for (let k = 0; k < table[i][j].length; k++) {
            // console.log("Table old element",table[i][j][k])
            // console.log("i value",k)

            for (let x = 0; x < ColumnPossibleValues.length; x++) {
              // console.log("Table column element",ColumnPossibleValues[x])

              if (table[i][j][k] === ColumnPossibleValues[x]) {
                var flag = "true";
                // console.log("\ni of old table", table[i][j][k]);
                // console.log("\nj of columnPOssible", ColumnPossibleValues[x]);
              }
            }
            if (flag != "true") {
              // console.log("i value",k)
              // console.log("new table of i",newTable[k])
              // console.log("old table of i",table[i][j][k])

              var index = newTable.indexOf(table[i][j][k]);
              // console.log("Index", index);
              newTable.splice(index, 1);
              console.log("Removed element", newTable);
            } else if (flag === "true") {
              // console.log("In the table array", table[i][j][k]);
            }
            var flag = null;
          }
          console.log("Final Table", newTable);
          table[i][j] = newTable;

          // this.associateColumn(newTable,table)

          // console.log("**********Table [i][j]**********", table[i][j], i, j);


          // console.log("same row when declare with array",ColumnPossibleValues)

          // table[i][j]=ColumnPossibleValues
        }
      }
    }

    //7th column
    else if (count === 7) {
      console.log("Column possibles.........", ColumnPossibleValues);

      for (let i = 0; i < 9; i++) {
        for (let j = 7; j < 8; j++) {
          // console.log("Table[i][j]", table[i][j]);

          var newTable = [];
          // newTable = table[i][j].map((x) => x);
          newTable = Array.from(table[i][j]);

          // console.log("\n\n\nNew table", newTable);
          console.log("\n Table values", table[i][j]);
          console.log("\n Column possible values", ColumnPossibleValues);

          if( table[i][j] === 1 || table[i][j] === 2 || table[i][j] === 3
            || table[i][j] === 4 || table[i][j] === 5 || table[i][j] === 6|| table[i][j] === 7
            || table[i][j] === 8 || table[i][j] === 9){

            newTable = table[i][j];
            // console.log("NEW TABLE",newTable);
          }

          for (let k = 0; k < table[i][j].length; k++) {
            // console.log("Table old element",table[i][j][k])
            // console.log("i value",k)

            for (let x = 0; x < ColumnPossibleValues.length; x++) {
              // console.log("Table column element",ColumnPossibleValues[x])

              if (table[i][j][k] === ColumnPossibleValues[x]) {
                var flag = "true";
                // console.log("\ni of old table", table[i][j][k]);
                // console.log("\nj of columnPOssible", ColumnPossibleValues[x]);
              }
            }
            if (flag != "true") {
              // console.log("i value",k)
              // console.log("new table of i",newTable[k])
              // console.log("old table of i",table[i][j][k])

              var index = newTable.indexOf(table[i][j][k]);
              // console.log("Index", index);
              newTable.splice(index, 1);
              console.log("Removed element", newTable);
            } else if (flag === "true") {
              // console.log("In the table array", table[i][j][k]);
            }
            var flag = null;
          }
          console.log("Final Table", newTable);
          table[i][j] = newTable;

          // this.associateColumn(newTable,table)

          // console.log("**********Table [i][j]**********", table[i][j], i, j);


          // console.log("same row when declare with array",ColumnPossibleValues)

          // table[i][j]=ColumnPossibleValues
        }
      }
    }

    //8th column
    else if (count === 8) {
      console.log("Column possibles.........", ColumnPossibleValues);

      for (let i = 0; i < 9; i++) {
        for (let j = 8; j < 9; j++) {
          // console.log("Table[i][j]", table[i][j]);

          var newTable = [];
          // newTable = table[i][j].map((x) => x);
          newTable = Array.from(table[i][j]);

          // console.log("\n\n\nNew table", newTable);
          console.log("\n Table values", table[i][j]);
          console.log("\n Column possible values", ColumnPossibleValues);


          if( table[i][j] === 1 || table[i][j] === 2 || table[i][j] === 3
            || table[i][j] === 4 || table[i][j] === 5 || table[i][j] === 6|| table[i][j] === 7
            || table[i][j] === 8 || table[i][j] === 9){

            newTable = table[i][j];
            // console.log("NEW TABLE",newTable);
          }



          else {

          for (let k = 0; k < table[i][j].length; k++) {
            // console.log("Table old element",table[i][j][k])
            // console.log("i value",k)

            for (let x = 0; x < ColumnPossibleValues.length; x++) {
              // console.log("Table column element",ColumnPossibleValues[x])

              if (table[i][j][k] === ColumnPossibleValues[x]) {
                var flag = "true";
                // console.log("\ni of old table", table[i][j][k]);
                // console.log("\nj of columnPOssible", ColumnPossibleValues[x]);
              }
            }
            if (flag != "true") {
              // console.log("i value",k)
              // console.log("new table of i",newTable[k])
              // console.log("old table of i",table[i][j][k])

              var index = newTable.indexOf(table[i][j][k]);
              console.log("Index", index);
              newTable.splice(index, 1);
              console.log("Removed element", newTable);
            } else if (flag === "true") {
              // console.log("In the table array", table[i][j][k]);
            }
            var flag = null;
          }
        }


          
          console.log("Final Table", newTable);

          table[i][j] = newTable;

          // this.associateColumn(newTable,table)

          // console.log("**********Table [i][j]**********", table[i][j], i, j);


          // console.log("same row when declare with array",ColumnPossibleValues)

          // table[i][j]=ColumnPossibleValues
        }
      }
    }

    console.log("************************TABLE**********",table)


    this.findGrid(table)
  }

  findGrid(table){

        for(let i=0;i<9;i++){
  
        var gridPosition = i;
        this.gridPossibles(table,gridPosition);
        }

        

        // console.log("Grid position",gridPosition)
  }

  gridPossibles(table,gridPosition){

    //1st grid
    if(gridPosition === 0){
      for (let i = 0; i < 3; i++) {
        var gridPossibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < gridPossibleValues.length; k++) {
              if (table[j][i] === gridPossibleValues[k]) {
                // var possible = possibleValues.pop(table[i][j])
                gridPossibleValues.splice(k, 1);
                // console.log("Removed Possible",removedPossible)
              }
            }
          
        }

      }
      console.log("Grid Possible Value", gridPossibleValues);
    }

    //2nd grid
    else  if(gridPosition === 1){
      for (let i = 3; i < 6; i++) {
        var gridPossibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < gridPossibleValues.length; k++) {
              if (table[j][i] === gridPossibleValues[k]) {
                // var possible = possibleValues.pop(table[i][j])
                gridPossibleValues.splice(k, 1);
                // console.log("Removed Possible",removedPossible)
              }
            }
          
        }

      }
      console.log("Grid Possible Value", gridPossibleValues);
    }

    //3rd grid
    else if (gridPosition === 2){
      for (let i = 6; i < 9; i++) {
        var gridPossibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < gridPossibleValues.length; k++) {
              if (table[j][i] === gridPossibleValues[k]) {
                // var possible = possibleValues.pop(table[i][j])
                gridPossibleValues.splice(k, 1);
                // console.log("Removed Possible",removedPossible)
              }
            }
          
        }

      }
      console.log("Grid Possible Value", gridPossibleValues);
    }

    //4th grid
    else  if(gridPosition === 3){
      for (let i = 3; i < 6; i++) {
        var gridPossibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < gridPossibleValues.length; k++) {
              if (table[j][i] === gridPossibleValues[k]) {
                // var possible = possibleValues.pop(table[i][j])
                gridPossibleValues.splice(k, 1);
                // console.log("Removed Possible",removedPossible)
              }
            }
          
        }

      }
      console.log("Grid Possible Value", gridPossibleValues);
    }
    
    //5th grid
    else  if(gridPosition === 4){
      for (let i = 3; i < 6; i++) {
        var gridPossibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let j = 3; j < 6; j++) {
            for (let k = 0; k < gridPossibleValues.length; k++) {
              if (table[j][i] === gridPossibleValues[k]) {
                // var possible = possibleValues.pop(table[i][j])
                gridPossibleValues.splice(k, 1);
                // console.log("Removed Possible",removedPossible)
              }
            }
          
        }

      }
      console.log("Grid Possible Value", gridPossibleValues);
    }

    //6th grid
    else if (gridPosition === 5){
      for (let i = 3; i < 6; i++) {
        var gridPossibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let j = 6; j < 9; j++) {
            for (let k = 0; k < gridPossibleValues.length; k++) {
              if (table[j][i] === gridPossibleValues[k]) {
                // var possible = possibleValues.pop(table[i][j])
                gridPossibleValues.splice(k, 1);
                // console.log("Removed Possible",removedPossible)
              }
            }
          
        }

      }
      console.log("Grid Possible Value", gridPossibleValues);
    }

    //6th grid
    else  if(gridPosition === 6){
      for (let i = 6; i < 9; i++) {
        var gridPossibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < gridPossibleValues.length; k++) {
              if (table[j][i] === gridPossibleValues[k]) {
                // var possible = possibleValues.pop(table[i][j])
                gridPossibleValues.splice(k, 1);
                // console.log("Removed Possible",removedPossible)
              }
            }
          
        }

      }
      console.log("Grid Possible Value", gridPossibleValues);
    }

    //7th grid
    else  if(gridPosition === 7){
      for (let i = 6; i < 9; i++) {
        var gridPossibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let j = 3; j < 6; j++) {
            for (let k = 0; k < gridPossibleValues.length; k++) {
              if (table[j][i] === gridPossibleValues[k]) {
                // var possible = possibleValues.pop(table[i][j])
                gridPossibleValues.splice(k, 1);
                // console.log("Removed Possible",removedPossible)
              }
            }
          
        }

      }
      console.log("Grid Possible Value", gridPossibleValues);
    }

    else  if(gridPosition === 8){
      for (let i = 6; i < 9; i++) {
        var gridPossibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let j = 6; j < 9; j++) {
            for (let k = 0; k < gridPossibleValues.length; k++) {
              if (table[j][i] === gridPossibleValues[k]) {
                // var possible = possibleValues.pop(table[i][j])
                gridPossibleValues.splice(k, 1);
                // console.log("Removed Possible",removedPossible)
              }
            }
          
        }

      }
      console.log("Grid Possible Value", gridPossibleValues);
    }


  }
 

 

}

module.exports = Sudoku;

