const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let sum = 0;

function getNumber() {
    readline.question('Enter a number (or type "stop" to finish): ', (input) => {
        if (input.toLowerCase() === "stop") {
            console.log(`The sum of all numbers is: ${sum}`);
            readline.close();
        } else {
            let number = parseInt(input);
            if (!isNaN(number)) {
                sum += number;
            }
            getNumber();
        }
    });
}

getNumber();
