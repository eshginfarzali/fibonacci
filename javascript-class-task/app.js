
// 1. Write a JavaScript program to display numbers as worlds using ASCII code.
// example: [83, 97, 108, 97, 109, 32, 65, 122, 101, 114, 98, 97, 121, 99, 97, 110]
// example: [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
// output: hello world
// example: [106, 97, 118, 97, 115, 99, 114, 105, 112, 116, 32, 105, 115, 32, 98, 111, 109, 98, 97]

// #task1
/*
let num = [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100];

let word = "";

for (let i = 0; i < num.length; i++) {
  word += String.fromCharCode(num[i]);
}
console.log(word);



let asciiCode = [83, 97, 108, 97, 109, 32, 65, 122, 101, 114, 98, 97, 121, 99, 97, 110];
let word1 = "";

for (let i = 0; i < asciiCode.length; i++) {
  word1 += String.fromCharCode(asciiCode[i]);
}
console.log(word1);
*/




// 2. Write a JavaScript program to convert a string to an array of ASCII codes.
// example: hello world
// output: [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
// example: Salam Azerbaycan
// example: javascript is bomba

/*
let str = "hello world";
let toAsciiCode = [];
for (let i = 0; i < str.length; i++) {
  let ascii = str.charCodeAt(i);
  toAsciiCode.push(ascii);
}
console.log(toAsciiCode);
*/



// 3. Write a JavaScript program to convert a string to an array of characters.
// example: hello world
// output: ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]


/*let strToArr = "hello world"
let arr = strToArr.split("")
console.log(arr);*/



// 4. Write a JavaScript program to drop the vowels from a string.
// example: hello world
// output: hll wrld

// let helloStr =" hello world"
// let noVowel =helloStr.replace(/[aeiuo]/gi, "")
// console.log(noVowel);


// const str = 'hello world';
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// let result = '';
// debugger;
// for (let i = 0; i < str.length; i++) {
// 	let letter = str[i];
// 	let isVowel = false;
// 	for (let j = 0; j < vowels.length; j++) {
// 		let vowel = vowels[j];

// 		if (letter === vowel) {
// 			isVowel = true;
// 		}
// 	}
// 	if (!isVowel) {
// 		result += letter;
// 	}
// }
// console.log({ str, result });





// 5. Write a JavaScript program to check if a string contains only digits.
// example: 1234567890  // true
// example: 1234567890a // false
/*
function checkInNumber(num){
  // console.log(typeof(num));
if(typeof(num) === "number"){
console.log(true);
}else{
  console.log(false);
}
}

 checkInNumber(1234567890) // true
 checkInNumber( "1234567890a") // false
*/




// 6. Write a JavaScript program to check if a string contains only digits and letters.
// example: 1234567890  // true
// example: 1234567890a // true
// example: 1234567890a!@#$%^&*()_+ // false



// 7. Write a JavaScript program to check if a string contains only uppercase letters.
// example: HELLO WORLD // true
// example: HELLO WORLD! // true
// example: HELLO WORLD!@#$%^&*()_+ // true
// example: HELLO WORLD!@#$%^&*()_+a // false

// 8. Write a JavaScript program to UpperCase the first letter of each word of a given string without spaces.
// example: hello world
// output: HelloWorld
// example: a man who thinks about the end, can not be a hero

// 9. Write a JavaScript program to remove duplicate characters from a string.
// example: hello world
// output: helo wrd
// example: javascript is bomba
// example: a man who thinks about the end, can not be a hero

// 10. Write a JavaScript program to convert a string into camel case.
// example: hello world
// output: helloWorld
// example: javascript is bomba
// example: a man who thinks about the end, can not be a hero

// 11. Write a JavaScript program to convert a string into snake case.
// example: hello world
// output: hello_world
// example: a man who thinks about the end, can not be a hero

// 12. Write a JavaScript program to convert a string into kebab case.
// example: hello world
// output: hello-world
// example: a man who thinks about the end, can not be a hero
// example: javascript is bomba

// 13. Write a JavaScript program to check if a given string is a palindrome.
// palindromes: madam, civic, radar, level, rotor, kayak, reviver, racecar, redder, madam, refer
// example: hello world // false
// example: madam // true
// example: racecar // true

// 14. Write a JavaScript program to check if a given string is a pangram.
// pangram: a sentence containing every letter in the English alphabet.
// example: The quick brown fox jumps over the lazy dog. // true
// example: The quick brown fox jumps over the dog. // false

// 15. Write a JavaScript program to check if a given string is a anagram.
// anagram: a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// example: cinema // iceman // true
// example: listen // silent // true
// example: hello // world // false
