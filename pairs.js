/*Give a list of numbers can you find all the
 pairs of numbers whose sum equals k?*/

 let testArray = [1, 9, 11, 13, 2, 3, 7, 5];
 //N = 12;

function findIt(array = testArray, n){
    let solutions = [];
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[i] + array[j] === n && array[i] != array[j]){
                solutions.push([array[i], array[j] ]);
            }
        }
    }
    if(solutions.length > 0){
        console.log(solutions);
    }else{
        console.log("No numbers have found");
    }
}

findIt(testArray,12);