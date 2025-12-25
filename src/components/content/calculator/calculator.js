function initCalc() {
  let calculator = document.querySelector('.calculator')
  if (!calculator) return
  let  price = calculator.dataset.price,
    result = calculator.querySelector('.js-calc-result'),
    btnResult = calculator.querySelector('.js-btn-calc'),
    input = calculator.querySelector('.form--input input')

    btnResult;
  addEventListener('click', function() {
    let userValue = input.value;
    let calculation = (userValue * price) * 12;

    let formatted = calculation.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ');
    result.textContent = formatted;
  });
}

initCalc();
