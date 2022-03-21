/*
Using array methods, you will transform an array of strings into a secret message!

You should consult the Mozilla Developer Network (MDN) for reference on any method with which you are not familiar.
*/

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// console.log(secretMessage.length);
secretMessage.pop();
// console.log(secretMessage.length);

secretMessage.push('to', 'program');
// console.log(secretMessage);

easilyIndex = secretMessage.indexOf('easily');
// console.log(easilyIndex);
secretMessage[easilyIndex] = 'right';
// console.log(secretMessage);

secretMessage.shift();
// console.log(secretMessage);

secretMessage.unshift('Programming');
// console.log(secretMessage);

getIndex = secretMessage.indexOf('get');
secretMessage.splice(getIndex, 5, 'know');
// console.log(secretMessage);

console.log(secretMessage.join(' '));
