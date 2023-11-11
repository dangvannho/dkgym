document.getElementById("dkForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const ageInput = document.getElementById("age");
  const weightInput = document.getElementById("weight");
  const resultElement = document.getElementById("result");

  const age = parseFloat(ageInput.value, 10);
  const weight = parseFloat(weightInput.value);

  if (isNaN(age) || !Number.isInteger(age) || isNaN(weight)) {
    resultElement.innerText = "Nhập sai";
    return;
  }

  if (ktraAge(age) && ktraWeight(weight)) {
    resultElement.innerText = "Đăng ký thành công !";
  } else {
    resultElement.innerText = "Đăng ký không thành công ! ";
  }
});

function ktraAge(age) {
  return age >= 15 && age <= 60;
}

function ktraWeight(weight) {
  return weight >= 40 && weight <= 100;
}
