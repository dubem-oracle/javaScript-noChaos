const prompt = require("prompt-sync")();

let sum = 0;
let count = 0;

while (true){
    let number = Number(prompt("Enter a number (-1 to stop):  "));
    if (number == -1){
        break;
    }
    if (number >= 0){
    sum += number;
    count++;
    
    
    average = sum / count;
    
    console.log("Average: " + average);
    }
}
    

