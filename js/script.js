// За основу взяв одну з попередніх дз
function mainFunction() {
    let num = +prompt('enter your number');
    let degree = +prompt('enter your degree');
    calculation(num, degree);
}

function calculation(num, degree) {
    if (isNaN(num && degree)) {
        alert('You enter wrong number or degre!!!')
    } else if (num && degree != NaN) {
        let result = Math.pow(num, degree);
        alert(`Result ${num} in degree ${degree} = ${result}`);
    }

};

mainFunction()