"use strict";

const tipButtons = document.querySelectorAll(".btn_tip");
const tipInput = document.querySelector(".custom");
const billInput = document.querySelector(".bill");
const peopleInput = document.querySelector(".people");
const totalOutput = document.querySelector(".total_amount-num");
const tipOutput = document.querySelector(".tip_amount-num");
const errorMsg = document.querySelector(".error_msg");
const resetBtn = document.querySelector(".reset_btn");
let billValue = 0;
let tipValue = 0;
let peopleValue = 1;

const setBillValue = function () {
  billValue = Number(billInput.value);
  calcResluts();
};

const setCustomTipValue = function () {
  tipValue = Number(tipInput.value);
  calcResluts();
};

const setPeopleCount = function () {
  peopleValue = Number(peopleInput.value);
  calcResluts();
};

const setErorrMsg = function () {
  errorMsg.classList.remove("hidden");
  peopleInput.classList.add("error");
};

const resetButton = function () {
  billValue = 0;
  tipValue = 0;
  peopleValue = 1;
  billInput.value = 0;
  tipInput.value = 0;
  peopleInput.value = "";
  errorMsg.classList.add("hidden");
  peopleInput.classList.remove("error");
};

billInput.addEventListener("input", setBillValue);
tipInput.addEventListener("input", setCustomTipValue);
peopleInput.addEventListener("input", setPeopleCount);
resetBtn.addEventListener("click", resetButton);

const calcResluts = function () {
  if (peopleValue >= 1) {
    const totalAmount =
      (billValue + (tipValue / 100) * billValue) / peopleValue;
    const tipAmount = (billValue * (tipValue / 100)) / peopleValue;
    totalOutput.textContent = `$${totalAmount.toFixed(2)}`;
    tipOutput.textContent = `$${tipAmount.toFixed(2)}`;
    errorMsg.classList.add("hidden");
    peopleInput.classList.remove("error");
  } else {
    setErorrMsg();
  }
};

for (let i = 0; i < tipButtons.length; i++) {
  tipButtons[i].addEventListener("click", function () {
    tipValue = tipButtons[i].value;
    calcResluts();
  });
}
