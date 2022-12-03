import { getInput } from "../utils/helpers.js";
const input = getInput();

let sumArray = [];

function compareNumbers(a, b) {
    return b - a;
}

let inputArray = input.split("\r\n\r\n");
inputArray.forEach(elf => {
    let totalCalories = 0;
    elf.split('\r\n').forEach(foodItem => {
        totalCalories += parseInt(foodItem);
    }); 
    sumArray.push(totalCalories);
})

sumArray.sort(compareNumbers);

let topThreeSum = sumArray[0];
for(let i = 1; i <= 2; i++) {
    topThreeSum += sumArray[i];
}
console.time("dayOne")
console.log(sumArray[0]);
console.log(topThreeSum);
console.timeEnd("dayOne")