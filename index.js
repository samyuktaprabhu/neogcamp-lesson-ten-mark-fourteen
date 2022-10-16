const initialPrice = document.querySelector('#in-price')
const quantity = document.querySelector('#qty')
const currentPrice = document.querySelector('#curr-price')
const checkButton = document.querySelector('#btn-check')
const outerText = document.querySelector('#output-text')

function calculateProfitLoss(ip, q, cp) {
  const profitLossValue = ip == cp ? 0 : ip > cp ? (ip - cp) * q : (cp - ip) * q
  const flag = ip == cp ? 'Equal' : ip > cp ? 'Loss' : 'Profit'
  const profitLossPercentage = (profitLossValue / ip) * 100

  if (flag == 'Equal') {
    outerText.innerText = 'No Profit, No loss 🙂'
    outerText.style.color = 'blue'
  } else if (flag == 'Loss') {
    outerText.innerText =
      'Oh no! Your loss is ' +
      profitLossValue.toFixed(2) +
      ' and loss percentage is ' +
      profitLossPercentage.toFixed(2) +
      '% 😕 '
    outerText.style.color = 'red'
  } else {
    outerText.innerText =
      'Oh wow! Your profit is ' +
      profitLossValue.toFixed(2) +
      ' and profit percentage is ' +
      profitLossPercentage.toFixed(2) +
      '% 😍 '
    outerText.style.color = 'green'
  }
}

checkButton.addEventListener('click', profitOrLossHandler)
function profitOrLossHandler() {
  const initPrice = initialPrice.value
  const qty = quantity.value
  const currPrice = currentPrice.value

  if (
    parseFloat(initPrice) > 0 &&
    parseFloat(qty) > 0 &&
    parseFloat(currPrice) > 0
  ) {
    calculateProfitLoss(initPrice, qty, currPrice)
  } else {
    outerText.innerText = 'Please enter valid details!'
  }
}
