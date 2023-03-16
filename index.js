"use strict";

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
const btn = document.getElementById("btn");
let body = document.querySelector("body");

btn.addEventListener("click", () => {
  if (input1.value === input2.value && input1.value === input3.value) {
    body.style.background = "green";
  } else {
    body.style.background = "red";
  }
});
