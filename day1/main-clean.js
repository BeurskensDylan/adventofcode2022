import { getInput } from "../utils/helpers.js";
const input = getInput().split("\r\n\r\n");

const sumArray = input.map(elf => 
    elf.split('\r\n').reduce((totalCal, foodItem) => 
        totalCal + parseInt(foodItem),
    0));

sumArray.sort((a, b) => b - a);

console.time("dayOne");
console.log("Part One: ", sumArray[0]);
console.log("Part Two: ", sumArray[0] + sumArray[1] + sumArray[2]);
console.timeEnd("dayOne");