var columnPossible = [4, 5, 6, 8, 9];

var oldTable= 7




var newTable=  7

 

//Remove non-duplicate value
//compare two tables element
//If non-duplicate element present in table remove it

for(let i=0;i<oldTable.length;i++){
    console.log("Table old element",oldTable[i])
    console.log("i value",i)

    for(let j=0;j<columnPossible.length;j++){
        console.log("Table column element",columnPossible[j])

        if(oldTable[i] === columnPossible[j]){
            var flag="true"
            console.log("i of old table",oldTable[i])
            console.log("j of columnPOssible",columnPossible[j])
        }
    }

    if(flag!="true"){
        console.log("i value",i)
        console.log("new table of i",newTable[i])
        console.log("old table of i",oldTable[i])


        var index = newTable.indexOf(oldTable[i])
        console.log("Index",index)
        newTable.splice(index,1)
        console.log("Removed element",newTable)
    }

    else if(flag === "true"){
        console.log("In the table array",oldTable[i])
    }
    var flag=null

}
console.log("Table",newTable)
