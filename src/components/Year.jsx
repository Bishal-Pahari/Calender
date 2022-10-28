import React from "react";

const date = new Date();
let currentYear = date.getFullYear();

export default function Year() {
  return (
    <div className="year-box">
      <h2>{currentYear}</h2>
    </div>
  );
}
