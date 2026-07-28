
//Getting factorial of a given number

function getsFactorial(num) {
    let facto = 1;
    for(let i = 1; i < num + 1; i++) {
        facto = facto * i;
    }

    return facto;
}

const result = getsFactorial(4);
console.log(result);