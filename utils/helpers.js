import { readFileSync } from "fs";
export const getInput = (fileName = "input") => 
    readFileSync(`${fileName}.txt`, "utf-8").toString();