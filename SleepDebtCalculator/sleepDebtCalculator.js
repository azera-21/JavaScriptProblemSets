/*
Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/

function getSleepHours(day) {
  switch(day) {
    case 'monday':
      return 7.25;
      break;
    case 'tuesday':
      return 4.3;
      break;
    case 'wednesday':
      return 6.5;
      break;
    case 'thursday':
      return 5.3;
      break;
    case 'friday':
      return 5.5;
      break;
    case 'saturday':
      return 6.3;
      break;
    case 'sunday':
      return 5;
      break;
    default:
      return 'Please enter a valid date, e.g. \'monday\'.';
      break;
  }
};

// console.log(getSleepHours('tuesdays'));

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

function getIdealSleepHours(idealHours) {
  return idealHours * 7;
}

// console.log(getActualSleepHours());
// console.log(getIdealSleepHours());

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(7);

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${Math.floor(actualSleepHours - idealSleepHours)} hours more sleep than needed`);
  } else {
    console.log('You got ' + Math.floor(idealSleepHours - actualSleepHours) + ' hours less sleep than needed. You should get some rest...zzz...');
  }
}

calculateSleepDebt();
