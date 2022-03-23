/*
Write a function, dogFactory(). It should:

have 3 parameters: name, breed, and weight (in that order)
expect name and breed to be strings
expect weight to be a number
return an object
have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in
dogFactory('Joe', 'Pug', 27)
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }
*/

// Write your code here:
function dogFactory(name, breed, weight) {

  if (typeof name !== 'string') {
    return 'Please enter a string for name';
  } else if (typeof breed !== 'string') {
    return 'Please enter a string for breed';
  } else if (typeof weight !== 'number') {
    return 'Please enter a valid number for weight';
  }

  return dog = {
    name: name,
    breed: breed,
    weight: weight
  }
}

console.log(dogFactory('Jenny', 'Labrador', 30));

