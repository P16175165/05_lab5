"use-strict";

(function () {
  const theForm = document.getElementById('the-form');

  //--------DATE PICKER:
  const theDate = document.getElementById('datePicker');
  const getDate = document.querySelector ('input[type="date"]');
  let dateHeader = theDate.innerText;

  const parseDate = d => theDate.innerText = `${dateHeader} ${d.toDateString()}`;


//shows today's date on page load
let today = new Date();
parseDate(today);

//uppdates heading with chosen date
const showDate = () => {
  let d = new Date(getDate.value);
  theDate.innerText = "";
  parseDate(d);
}

getDate.addEventListener("change", showDate);


//---------COLOUR PICKER:
  const chooseColor = document.getElementById("colour");
  const theValue = document.getElementById("the-value");

  const setColor = () => theValue.style["background"] = chooseColor.value;

  //sets the paragraph color on page load:
  setColor();

  theForm.addEventListener("input", setColor);

//-------------------RANGE SLIDER:
  const range = document.getElementById("range");

  const rangeAction =() => {
    theValue.innerText = `${range.value}%`;
    theValue.style.width = `${range.value}%`;
  }

theForm.addEventListener("input", rangeAction);



})();
