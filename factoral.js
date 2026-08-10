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

