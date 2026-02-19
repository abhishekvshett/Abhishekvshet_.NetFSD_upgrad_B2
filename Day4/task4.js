

let number = 5;

let res = (number > 0) ? "Positive" : "Negative";

console.log(`The number ${number} is ${res}`);

if (number % 2 == 0) {
    console.log(`The number ${number} is even.`);
} else {
    console.log(`The number ${number} is odd.`);
}


console.log(`The numbers from 1 to given ${number} are: `);
for (let i = 1; i <= number; i++) {
    console.log(i);
}

