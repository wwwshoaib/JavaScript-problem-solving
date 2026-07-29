
//is the given word or string palindrome?
/**
 * const word = 'civic';
let reversedStr = ''
for (let i = word.length - 1; i >= 0; i--) {
    const reversed = word[i];
    reversedStr = reversedStr + word[i];



}

if (word === reversedStr) {
    console.log("Palidrome");

}

else {
    console.log('Not a palidrome')
}


 * 
 */ 

function getPalidrome(str) {
    let reversedStr = ''
for (let i = str.length - 1; i >= 0; i--) {
    const reversed = str[i];
    reversedStr = reversedStr + str[i];
}

if (str === reversedStr) {
    console.log("Palidrome");
}

else {
    console.log('Not a palidrome')
}

}

getPalidrome('dad');
