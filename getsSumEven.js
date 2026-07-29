
//Get sum of even numbers of an array using function


function getSumEven(arr) {
    const evenNumbers = [];

    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
            sum += arr[i];
            
        }
    }

    return sum;
}

const ourArray = [33, 2, 8, 10, 99];
const result = getSumEven(ourArray);
console.log(result);