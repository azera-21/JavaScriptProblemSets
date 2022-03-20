/*
Write a function, finalGrade(). It should:

take three arguments of type number
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
0-59 should return: 'F'
60-69 should return: 'D'
70-79 should return: 'C'
80-89 should return: 'B'
90-100 should return: 'A'
*/

// Write your function here:
function finalGrade(num1, num2, num3) {
  if (num1 < 0 || num2 < 0 || num3 < 0 || num1 > 100 || num2 > 100 || num3 > 100) {
    return 'You have entered an invalid grade.';
  }
  average = (num1 + num2 + num3) / 3;
  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >=80 && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 60 && average < 70) {
    return 'D';
  } else {
    return 'F';
  }
}



// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 92, 95)); // Should print 'A'

// We encourage you to add more function calls of your own to test your code!
console.log(finalGrade(99, 92, 60));