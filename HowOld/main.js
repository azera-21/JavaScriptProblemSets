/*
Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:

If the year is in the future, you should return a string in the following format:

'You will be [calculated age] in the year [year passed in]'
If the year is before they were born, you should return a string in the following format:

'The year [year passed in] was [calculated number of years] years before you were born'
If the year is in the past but not before the person was born, you should return a string in the following format:

'You were [calculated age] in the year [year passed in]'
*/

// Write your function here:
function howOld(age, year) {
  const currentYear = 2022;

  // Checks if year is greater than current year
  if (year > currentYear) {
    newAge = (year - currentYear) + age;
    return `You will be ${newAge} in the year ${year}`;

  // Checks if date occurs before person was born (e.g. someone born in aged 22 with the current year being 2022 would have been born in 2020. If someone passes in the year as 1999, this would be less than 2022 - 22 and therefore would print that the year is before they were born)
  } else if (year < currentYear - age) {
    newAge = ((year - currentYear) + age) * -1;
    return `The year ${year} was ${newAge} years before you were born`;

  // Because of the previous two if statements, there should only be one more scenario left but I've included an else if just for reference purposes
  } else if (year < currentYear) {
    newAge = (year - currentYear) + age;
    return `You were ${newAge} in the year ${year}`;
  }
}

// Once your function is written, write function calls to test your code!
console.log(howOld(22, 1998));
console.log(howOld(22, 2021)); 
console.log(howOld(22, 2062)); 
