import React from "react";

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const months = [
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
const date = new Date();

let currentDate = months[date.getMonth()];
let currentDay = weekday[date.getDay()];
let currentTarik = date.getDate();

export default function Currtime() {
  return (
    <div>
      <div className="latest-date">
        <p className="present-day">{currentDate}</p>
        <p className="present-tarik">{currentTarik + " " + currentDay}</p>
      </div>
    </div>
  );
}
