import React from "react";
import wishes from "../wishes";

let len = wishes.length;
let randomNumber = Math.random();
let randomQuote = Math.floor(len * randomNumber) + 1;

export default function Footer() {
  return (
    <footer>
      <p>{wishes[randomQuote]}</p>
    </footer>
  );
}
