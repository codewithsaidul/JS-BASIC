// Count how many times a string has the letter  a

// const sado = "I Love You Sadia";

// const sp = sado.split('')



// for (let i = 0; i < sp.length; i++) {
//     // console.log(sp[i])
//     if(sp[i] === 'a' || sp[i] === 'A') {
//         count++;
//     }

// }

function findLetter (letter) {
    let count = 0;

    let lett = letter.split('');

    for (let txt of lett) {
        if(txt === 'a' || txt === 'A') {
            count++;
        }
    }

    return count;
}


console.log(findLetter("I Love You SadiaA"))


// console.log("times of a :", count)

// Find Vowels

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowel (sentence) {
    let count = 0;

    let letter = Array.from(sentence);

    letter.forEach(function (value) {
        if (vowels.includes(value)) {
            count++;
        }
    })

    return count;
}


// console.log(countVowel("I Love You Sadia"))


