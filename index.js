"use strict";

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
const btn = document.getElementById("btn");
let body = document.querySelector("body");
let bollean = true;

btn.addEventListener("click", () => {
  if (bollean) {
    if (
      input1.value === input2.value &&
      input1.value === input3.value &&
      input1.value !== "" &&
      input2.value !== "" &&
      input3.value !== ""
    ) {
      body.style.background = "green";
      let add = document.querySelector(".title");
      add.innerHTML = "CORREKT";
    } else {
      body.style.background = "red";
      let add = document.querySelector(".title");
      add.innerHTML = "ERROR";
    }
    bollean = false;
  } else {
    clear();
  }
});

function clear() {
  input1.value = "";
  input2.value = "";
  input3.value = "";
  body.style.background = "#fff";
  btn.textContent = "Click me";
  bollean = true;
}
