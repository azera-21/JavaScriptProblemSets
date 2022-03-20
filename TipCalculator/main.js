// Write your function here:
function tipCalculator(quality, total) {
  switch(quality) {
    case 'bad':
      return 0.05 * total;
      break;
    case 'ok':
      return 0.15 * total;
      break;
    case 'good':
      return 0.2 * total
      break;
    case 'excellent':
      return 0.3 * total
      break;
    default:
      return 0.18 * total;

      break;
  }
}

// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('good', 100)) //should return 20

// We encourage you to add more function calls of your own to test your code!
