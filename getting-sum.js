//Write a program to calculate the sum of the numbers from 1 to 7.


function gettingSumofSeries(num) {
    let sum = 0;
    for ( let i = 1; i < num + 1 ; i++) {
        sum = sum + i;
    }

    return sum;

}


const result = gettingSumofSeries(7);
console.log(result);