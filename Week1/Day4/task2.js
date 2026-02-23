let amount = 6000;
let dis = 0;
let finalPay = 0;

if (amount >= 5000) {
    dis = amount * (20/100);
} else if (amount >= 3000 && amount <= 4999){
    dis = amount * 0.10;
} else {
    dis = 0;
}

finalPay = amount - dis;

console.log(`The discount amount is ${dis} and amount is ${amount} and the final amount to pay after discount ${finalPay}`);