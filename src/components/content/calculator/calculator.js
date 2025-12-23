function initCalc() {
  let calculator = document.querySelector('.calculator');
  let price = calculator.dataset.price;
  let result = calculator.querySelector('.js-calc-result');
  let btnResult = calculator.querySelector('.js-btn-calc');
  let input = calculator.querySelector('.form--input input');

  btnResult.addEventListener('click', function() {
    let userValue = input.value;
    let calculation = (userValue * price) * 12;

    // 2 цифры после запятой и пробелы для тысяч
    let formatted = calculation.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ');
    result.textContent = formatted;
  });
}

initCalc();
