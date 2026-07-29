
//Getting average of numbers of an array


function getsAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
    }

    const average = sum / arr.length;
    return average;
}

const numbers = [2, 8, 3, 7];
const result = getsAverage(numbers);
console.log(result);