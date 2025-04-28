const dateInput = document.getElementById("date-input");
const calculateBtn = document.getElementById("btn");
const resultElement = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
  const dob = dateInput.value;
  if (!dob) {
    alert("Please select a date of birth");
    return;
  }
  const age = calculate(dob);
  resultElement.innerHTML = `Your age is <b><i>${age.years}</i></b> years, <b><i>${age.months}</i></b> months, and <b><i>${age.days}</i></b> days`;
});

let calculate = (dob) => {
  let Birthdate = new Date(dob);
  let current = new Date();

  let years = current.getFullYear() - Birthdate.getFullYear();
  let months = current.getMonth() - Birthdate.getMonth();
  let days = current.getDate() - Birthdate.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += months < 0 ? 12 : 0;
  }
  if (days < 0) {
    let lastMonth = new Date(
      current.getFullYear(),
      current.getMonth(),
      0
    ).getDate();
    days += lastMonth;
    months--;
  }
  return { years, months, days };
};
