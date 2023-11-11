document.getElementById("dkForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const ageInput = document.getElementById("age");
  const weightInput = document.getElementById("weight");
  const resultElement = document.getElementById("result");

  const age = parseFloat(ageInput.value, 10);
  const weight = parseFloat(weightInput.value);

  if (!Number.isInteger(age) || isNaN(weight) || age < 0 || weight < 0) {
    resultElement.innerText = "Nhập sai";
    return;
  }

  if (ktraAge(age) && ktraWeight(weight)) {
    resultElement.innerText = "Đạt yêu cầu";
  } else {
    resultElement.innerText = "Không đạt yêu cầu";
  }
});

function ktraAge(age) {
  return age >= 15 && age <= 60;
}

function ktraWeight(weight) {
  return weight >= 40 && weight <= 100;
}
