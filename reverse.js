
// get the reverse of the given string

// function getsReverseStr(str) {
    
// }
/**
 * 
let str = "I love Bangladesh";

let reversedString = '';

for (let i = str.length - 1; i >= 0; i--) {
    const letter = str[i];
    reversedString = reversedString + letter;
    
}

console.log(reversedString);

 */

function getReversedString(str) {
    let = reversedString = '';
    for ( let i = str.length - 1; i >= 0; i--) {
        const letter = str[i];
        reversedString += letter;
    }

    return reversedString;
}

const result = getReversedString('Princes Leonor');
console.log(result);