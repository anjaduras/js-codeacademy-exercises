let raceNumber = Math.floor(Math.random() * 1000);
const IsEarly = true;
const RunnerAge = 98;
let raceTime = "";

if (IsEarly && RunnerAge > 18) {
  raceNumber += 1000;
}

if (RunnerAge > 18 && IsEarly) {
  raceTime = "9:30 pm";
 console.log('Your race number is ' + raceNumber);
  console.log('Your race time is ' +raceTime);
} else if (RunnerAge > 18 && !IsEarly) {
  raceTime = "11 am";
  console.log('Your race number is ' + raceNumber);
  console.log('Your race time is' +raceTime);
} else if (RunnerAge < 18) {
  raceTime = "12:30 pm";
 console.log('Your race number is ' + raceNumber);
  console.log('Your race time is ' +raceTime);
} else {
  console.log("Please ask for your number at the reception");
}