/*
*Conditionals, Functions, scope and loops
 */

// Equals 
let equals = 1=== 1;
//Greater than
let greaterThan = 5>1;
// Less than
let lessThan = 2>10;
// Greater than Equals
let greaterThanEq = 5>=5;
//less than equals
let lessThanEq = 4<=9;
//not equals
let notEquals = 5 !== 2;


let storeA = 3.10;
let storeB = 4.40;
let storeAIsLower = storeA < storeB;
function CompareStorePrices(storeA, storeB) {
    if (storeAIsLower) {
        console.log( "store A has a lower price." );
    } else if (storeB < storeA) {
        console.log( "store B has a lower price." );
    } else {
        console.log( "Their prices are equal." );
    }
}

//CompareStorePrices(10, 5);
//CompareStorePrices(7, 10);

function squareNum (number){
    return number * number;
}

let SquaredNumber = squareNum(10);
console.log(SquaredNumber);
