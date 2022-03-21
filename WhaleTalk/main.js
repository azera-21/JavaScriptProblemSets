/*

Whale Talk
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.
*/

const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
resultsArray = [];

for (i = 0; i < input.length; i++) {
  // console.log(`i is: ${i}`);
  if (input[i] === 'e' || input[i] === 'u') {
    resultsArray.push(input[i]);
  }
  for (j = 0; j < vowels.length; j++) {
    // console.log(`j is: ${j}`);
    if (vowels[j] === input[i]) {
      // console.log(vowels[j]);
      resultsArray.push(vowels[j]);    
    }
  }
}

console.log(resultsArray);

resultString = (resultsArray.join('')).toUpperCase();
console.log(resultString);

