
function countWordinString(str) {
    const words = str.split(' ').length;
    return words;
}

const result = countWordinString('Hello JavaScrip');
console.log(result);