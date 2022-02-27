import "./styles.css";

// Display Date and Time

const date = new Date(2017, 2, 12, 9, 25, 30);

const n = date.toDateString();

const time = date.toLocaleTimeString();

console.log("Date: " + n);
document.getElementById("app").innerHTML = "Date: " + n;

console.log("Time: " + time);
document.getElementById("app1").innerHTML = "Time: " + time;

//Display Current Date

const date_1 = new Date();

const n_1 = date_1.toDateString();

const time_1 = date_1.toLocaleTimeString();

console.log("Date: " + n_1);
document.getElementById("app2").innerHTML = "Date: " + n_1;

console.log("Time: " + time_1);
document.getElementById("app3").innerHTML = "Time: " + time_1;
