//below function works on strings only***

function hash(key, arrayLength){
    let total = 0;
    for (let i = 0; i < key.length; i++) {
        let char = key[i]
        // map "a" to 1, "b" to 2, "c" to 3, etc.
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLength;
      }
      return total;
    }

//refactored + improved function
//you want arrayLength to be a prime number as well to reduce collisions

function hash(key, arrayLength) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrayLength;
      }
      return total;
}