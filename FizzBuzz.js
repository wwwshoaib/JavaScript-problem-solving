//Find FizaBuzz from a series of numbers 1 to n

function gettingFizzBuzz(number) {
    if(number % 3 === 0 && number  % 5 === 0) {
        console.log("FizzBuzz");
    }

    else if ( number % 3 === 0) {
        console.log("Fizz");
    }
    else if ( number % 5 === 0) {
        console.log("Buzz");
    }

    else {
        console.log(number)
    }
}

gettingFizzBuzz(17);