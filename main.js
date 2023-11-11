document.getElementById("dkForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const ageInput = document.getElementById("age");
  const weightInput = document.getElementById("weight");
  const resultElement = document.getElementById("result");

  const age = parseInt(ageInput.value);
  const weight = parseInt(weightInput.value);

  if (ktraAge(age) && ktradWeight(weight)) {
    resultElement.innerText = "Đăng ký thành công! ";
  } else {
    resultElement.innerText = "Đăng ký không thành công!";
  }
});

function ktraAge(age) {
  return age >= 15 && age <= 60;
}

function ktradWeight(weight) {
  return weight >= 40 && weight <= 100;
}
