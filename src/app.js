/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { eventListeners } from "@popperjs/core";

window.onload = function() {
  const FIBONACCI_PLACEHOLDER = document.getElementById("fibonacci_text");
  const RANDOMIZE_BUTTON = document.getElementById("randomizer_button");

  const getFibonacciNumber = position => {
    let state = [0, 1];
    const fibonacciNumberList = new Array(position)
      .fill(0)
      .map((fibonacciNumber, index) => {
        if (index === 0) fibonacciNumber = state[0];
        if (index === 1) fibonacciNumber = state[1];
        if (index !== 0 && index !== 1) {
          fibonacciNumber = state[0] + state[1];
          state[0] = state[1];
          state[1] = fibonacciNumber;
        }
        return fibonacciNumber;
      });
    const indexOfnumber = fibonacciNumberList.length - 1;
    const fibonacciNumberForIndex =
      fibonacciNumberList[fibonacciNumberList.length - 1];
    return [indexOfnumber, fibonacciNumberForIndex];
  };

  const printFibonacciNumber = fibonacciNumber => {
    console.log("printing...");
    const string = `The fibonacci number for the position ${fibonacciNumber[0]} is: <b> ${fibonacciNumber[1]} </b>`;
    FIBONACCI_PLACEHOLDER.innerHTML = string;
  };

  const printOnClick = () => {
    RANDOMIZE_BUTTON.addEventListener("click", function() {
      const fibonacciNumber = getFibonacciNumber(
        Math.floor(Math.random() * 50 + 1)
      );
      printFibonacciNumber(fibonacciNumber);
    });
  };

  const main = () => {
    const fibonacciNumber = getFibonacciNumber(
      Math.floor(Math.random() * 50 + 1)
    );
    printFibonacciNumber(fibonacciNumber);
    printOnClick();
  };

  main();
};
