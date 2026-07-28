
//count vowel from a string


/**
 * const str = "I love my cats";
let vowel = 'aeiou';

let count = 0;

for (let i = 0; i <str.length; i++) {
    const letter = str[i];
    console.log(letter);
  const findVowel = vowel.includes(letter.toLowerCase());
   if(findVowel) {
    count++;
   }
    
}

console.log(count);
 * 
 */  


function countVowel(str) {
    let vowel = 'aeiou';
    let count = 0;
    for (let i = 0; i<str.length; i++) {
        const letter = str[i];
        const findsVowel = vowel.includes(letter.toLowerCase());
        if(findsVowel) {
            count++;
        }
    }

    return count;
}

const result = countVowel('JavaScript');
console.log(result);
