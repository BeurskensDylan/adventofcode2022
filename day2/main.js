import { getInput } from "../utils/helpers.js";
const input = getInput().split("\r\n");

const [rock, paper, scissors] = [1, 2, 3];
const [loss, draw, win] = [0, 3, 6];

let score = 0;

input.map(move => {
    if(move[0] === 'A' && move[2] === 'X') {
        score += (draw+rock);
    } else if(move[0] === 'A' && move[2] === 'Y') {
        score += (win+paper);
    } else if(move[0] === 'A' && move[2] === 'Z') {
        score += (loss+scissors);
    } else if(move[0] === 'B' && move[2] === 'X') {
        score += (loss+rock);
    } else if(move[0] === 'B' && move[2] === 'Y') {
        score += (draw+paper);
    } else if(move[0] === 'B' && move[2] === 'Z') {
        score += (win+scissors);
    } else if(move[0] === 'C' && move[2] === 'X') {
        score += (win+rock);
    } else if(move[0] === 'C' && move[2] === 'Y') {
        score += (loss+paper);
    } else if(move[0] === 'C' && move[2] === 'Z') {
        score += (draw+scissors);
    }
});

console.log(`Part One: ${score}`);

/**
 * Part Two:
 * X = Lose
 * Y = Draw
 * Z = Win
 */

score = 0;

input.map(move => {
    if(move[2] === 'X') {
        if(move[0] === 'A') {
            score += (loss+scissors);
        } else if(move[0] === 'B') {
            score += (loss+rock);
        } else {
            score += (loss+paper);
        }
    } else if(move[2] === 'Y') {
        if(move[0] === 'A') {
            score += (draw+rock);
        } else if(move[0] === 'B') {
            score += (draw+paper);
        } else {
            score += (draw+scissors);
        }
    } else {
        if(move[0] === 'A') {
            score += (win+paper);
        } else if(move[0] === 'B') {
            score += (win+scissors);
        } else {
            score += (win+rock);
        }
    }
});

console.log(`Part Two: ${score}`);