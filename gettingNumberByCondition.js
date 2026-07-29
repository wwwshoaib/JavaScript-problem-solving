
//Getting numbers by conditions

function getsNumbersByConditions(arr) {
    const number = 40;
    const findingNumber = []
    for (let i = 0; i < arr.length; i++) {
        if( arr[i] > number) {
            findingNumber.push(arr[i]);

        }
    }
    return findingNumber;
}

const numbers = [40, 60, 59, 50, 22, 99, 25];
const result = getsNumbersByConditions(numbers);
console.log(result);