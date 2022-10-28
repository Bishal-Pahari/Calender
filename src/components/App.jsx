import React from "react";

import Year from "./Year";
import Currtime from "./Currtime";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container">
      <nav>
        <h1>Calender</h1>
      </nav>
      <div className="date-box">
        <Year />
        <Currtime />
        <Footer />
        <p className="footer-description">
          Made with ❤ by{" "}
          <a href="https://github.com/Bishal-Pahari">Bishal Pahari</a>
        </p>
      </div>
    </div>
  );
}
