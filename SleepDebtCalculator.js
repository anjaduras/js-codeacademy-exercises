console.log("##### SLEEP DEBT CALCULATOR #####");
function getSleepHours(day) {
  if (day === "monday") {
    return 3.26;
  } else if (day === "tuesday") {
    return 6.47;
  } else if (day === "wednesday") {
    return 7.22;
  } else if (day === "thursday") {
    return 5.54;
  } else if (day === "friday") {
    return 5.57;
  } else if (day === "saturday") {
    return 6.3;
  } else if (day === "sunday") {
    return 7.12;
  } else {
    return "ERROR";
  }
}

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
};

const averageSleepHours = getActualSleepHours() / 7;
console.log();
console.log("Average sleep hours per day: " + averageSleepHours.toFixed(1));

console.log();
console.log("Actual sleep hours: " + getActualSleepHours().toFixed(1));
console.log("Ideal sleep hours: " + getIdealSleepHours());
console.log();

const calculateSleepDebt = () => {
  const idealSleepHours = getIdealSleepHours();
  const actualSleepHours = getActualSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You've got the perfect amount of sleep! Great job!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You got " +
        Math.trunc(actualSleepHours - idealSleepHours) +
        " hour(s) more sleep than you needed this week. Go touch some grass:)"
    );
  } else {
    console.log(
      "You got " +
        Math.trunc(idealSleepHours - actualSleepHours) +
        " hour(s) less sleep than you needed this week. Get some rest <3"
    );
  }
};

calculateSleepDebt();