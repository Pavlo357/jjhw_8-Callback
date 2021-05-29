// За основу взяв одну з попередніх дз

EXPONENTIATION

function mainFunction() {
    let num = +prompt('enter your number');
    let degree = +prompt('enter your degree');
    exponentiation(num, degree);
}

function exponentiation(num, degree) {
    if (isNaN(num && degree)) {
        alert('You enter wrong number or degre!!!')
    } else if (num && degree != NaN) {
        let result = Math.pow(num, degree);
        alert(`Result ${num} in degree ${degree} = ${result}`);
    }

};

mainFunction()



// MULTIPLAY

// function mainFunction() {
//     let multiplieFirst = +prompt('please enter the first multiplier');
//     let multiplieSecond = +prompt('be kind to enter the second multiplier');
//     multiplay(multiplieFirst, multiplieSecond);
// }

// function multiplay(multiplieFirst, multiplieSecond) {
//     if (isNaN(multiplieFirst && multiplieSecond)) {
//         alert('Each multiplier must be a number. Try again !!!')
//     } else if (multiplieFirst && multiplieSecond != NaN) {
//         let result = multiplieFirst * multiplieSecond;
//         alert(`The result of multiplying your numbers ${multiplieFirst} by ${multiplieSecond} = ${result}`);
//     }

// };

// mainFunction()



// DIVISION 

// function mainFunction() {
//     let dividend = +prompt('please enter the dividend');
//     let divisor = +prompt('be kind to enter the divisor');
//     division(dividend, divisor);
// }

// function division(dividend, divisor) {
//     if (isNaN(dividend && divisor)) {
//         alert('KEEP CALM and TRY AGAIN')
//     } else if (dividend && divisor != NaN) {
//         let result = dividend / divisor;
//         alert(`The result of division ${dividend} by ${divisor} = ${result}`);
//     }

// };

// mainFunction()



// MODULO 

// function mainFunction() {
//     let numOne = +prompt('Enter the first number');
//     let numTwo = +prompt('Enter the second number');
//     modulo(numOne, numTwo);
// }

// function modulo(numOne, numTwo) {
//     if (isNaN(numOne && numTwo)) {
//         alert('Prepare for annihilation stupid meatbag')
//     } else if (numOne && numTwo != NaN) {
//         let result = numOne % numTwo;
//         alert(`The remainder = ${result}`);
//     }

// };

// mainFunction()