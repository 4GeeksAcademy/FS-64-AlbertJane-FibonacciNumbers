/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
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
    console.log(
      `The Fibonacci number for the position ${fibonacciNumber[0]} is: ${fibonacciNumber[1]}`
    );
  };

  const main = () => {
    const fibonacciNumber = getFibonacciNumber(Math.floor(Math.random() * 50));
    printFibonacciNumber(fibonacciNumber);
  };

  main();
};
