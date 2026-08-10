let num = 10;
let fact = 1;

for (let i = 1; i <= num; i++) {
    fact *= i;
}

console.log(fact);

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i + " Even");
    } else {
        console.log(i + " Odd");
    }
}

function findLargest(arr) {
    //Suppose first element is the largest
    let largest = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            // Update the largest if a bigger element is found
            largest = arr[i]; 
        }
    }
    return largest;
}

console.log(findLargest([99, 5, 3, 100, 1]));