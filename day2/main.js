import { getInput } from "../utils/helpers.js";
const input = getInput().split("\r\n");

const [rock, paper, scissors] = [1, 2, 3];
const [loss, draw, win] = [0, 3, 6];

const gameValues = {
    "A X": 4,
    "A Y": 8,
    "A Z": 3,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 7,
    "C Y": 2,
    "C Z": 6
};

function sumGameValues(sum, play) {
    return sum + gameValues[play];
}

const totalScore = input.reduce(sumGameValues, 0);

console.log(`Part One: ${totalScore}`);

/**
 * Part Two:
 * X = Lose
 * Y = Draw
 * Z = Win
 */

const roundTwo = {
    "A": {"X": 3, "Y": 4, "Z": 8},
    "B": {"X": 1, "Y": 5, "Z": 9},
    "C": {"X": 2, "Y": 6, "Z": 7}
};

const sum = (sum, item) => sum + item;

function sumSecondGameValues(sum, [opponent, outcome]) {
    return sum + roundTwo[opponent][outcome];
}

const secondGame = input.map(game => game.split(' '));
const totalScoreTwo = secondGame.reduce(sumSecondGameValues, 0);

console.log(`Part Two: ${totalScoreTwo}`);