// const birthday = new Date('August 19, 1975 23:15:30');
// const birthday = new Date("1995-12-25T23:15:30");
const birthday = new Date();
const date1 = birthday.getDate();
console.log(date1);

let days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
console.log(days[birthday.getDay()]);

console.log("full year: ", birthday.getFullYear());
console.log("hours: ", birthday.getHours());
console.log("mili seconds: ", birthday.getMilliseconds());
console.log("minutes: ", birthday.getMinutes());

let months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
console.log("month is: ", months[birthday.getMonth()]);

console.log(birthday.getTime());
console.log(birthday.toString());
console.log(birthday.toDateString());
console.log(birthday.toISOString());
console.log(birthday.toJSON());
