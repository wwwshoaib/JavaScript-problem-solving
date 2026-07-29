
//Function for getting largest number from an array
function getsLargest(arr) {
    let largestNumber = arr[0];
    for(let i = 0; i < arr.length ; i++) {
        let currentNumber = arr[i];
        if( currentNumber > largestNumber ) {
            largestNumber = currentNumber;
        }
    }

    return largestNumber;
}

const givenArray = [34, 23, 200, 11, 90, 56, 87];
const result = getsLargest(givenArray);
console.log(result);


//Function for getting smallest number from an array
function getsLowestNumber(arr) {
    let lowestNumber = arr[0];
    for(let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];
        if(currentNumber < lowestNumber ) {
            lowestNumber = currentNumber;
        }
    }

    return lowestNumber;
}

const numbers = [30, 2, 440000, 245, 98];
const smallestNumber = getsLowestNumber(numbers);
console.log(smallestNumber);


