const nameOfMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const nameOfDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const hoursId = document.getElementById("hours");
const minutesId = document.getElementById("minutes");
const secondsId = document.getElementById("seconds");
let ampmId = document.getElementById("ampm");

let dateId = document.getElementById("date");
let monthId = document.getElementById("month");
let yearId = document.getElementById("year");

let dayId = document.getElementById("day");

setInterval(() => {
  let hours = new Date().getHours();
  let ampmNode = document.createTextNode(hours < 12 ? "AM" : "PM");
  hours = hours % 12;
  hours = hours ? hours : 12;

  let hoursNode = document.createTextNode(
    `${hours <= 9 ? "0" + hours : hours}`
  );

  let minutesNode = document.createTextNode(
    `${
      new Date().getMinutes() <= 9
        ? "0" + new Date().getMinutes()
        : new Date().getMinutes()
    }`
  );
  let secondsNode = document.createTextNode(
    `${
      new Date().getSeconds() <= 9
        ? "0" + new Date().getSeconds()
        : new Date().getSeconds()
    }`
  );

  let dateNode = document.createTextNode(
    `${
      new Date().getDate() <= 9
        ? "0" + new Date().getDate()
        : new Date().getDate()
    }`
  );

  let monthNode = document.createTextNode(
    `${nameOfMonths[new Date().getMonth()]}`
  );
  let yearNode = document.createTextNode(`${new Date().getFullYear()}`);

  let dayNode = document.createTextNode(`${nameOfDays[new Date().getDay()/7]}`);

  hoursId.childNodes[0] ? hoursId.removeChild(hoursId.childNodes[0]) : null;
  minutesId.childNodes[0]
    ? minutesId.removeChild(minutesId.childNodes[0])
    : null;
  secondsId.childNodes[0]
    ? secondsId.removeChild(secondsId.childNodes[0])
    : null;
  ampmId.childNodes[0] ? ampmId.removeChild(ampmId.childNodes[0]) : null;

  dateId.childNodes[0] ? dateId.removeChild(dateId.childNodes[0]) : null;
  monthId.childNodes[0] ? monthId.removeChild(monthId.childNodes[0]) : null;
  yearId.childNodes[0] ? yearId.removeChild(yearId.childNodes[0]) : null;

  dayId.childNodes[0] ? dayId.removeChild(dayId.childNodes[0]) : null;

  hoursId.appendChild(hoursNode);
  minutesId.appendChild(minutesNode);
  secondsId.appendChild(secondsNode);
  ampmId.appendChild(ampmNode);

  dateId.appendChild(dateNode);
  monthId.appendChild(monthNode);
  yearId.appendChild(yearNode);
  dayId.appendChild(dayNode);
}, 1000);

console.log(new Date().getDay());
