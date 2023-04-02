let loan = 0;
let companyEarned = 0;

const bet = () => {
  
  
  let balance = parseFloat(document.getElementById('balance').value);
  let loan = parseInt(document.getElementById('loan').value);
  const name = document.getElementById('name').value;
  const guess = document.getElementById('guess').value;
  const betAmount = parseFloat(document.getElementById('betAmount').value);
  
  if (balance == 0) {
    alert('you did your best, see you again')
    return;
  }
  
  if (guess === 'h') {
  } else if (guess === 't') {
  } else {
    alert('only h and t are valid')
    return;
  }
  
  if (betAmount >= balance / 2) {
    alert('You can only bid half of your money.');
    return;
  } else {
    let newBalance = balance - betAmount;
    document.getElementById('balance').value = newBalance.toFixed(2);
  }

  const outcomes = ['h', 't'];
  const result = outcomes[Math.floor(Math.random() * outcomes.length)];
  if (result === guess) {
    alert(`You got it! You won ${2 * betAmount}.`);
    document.getElementById('balance').value = newBalance - newLoan;
    document.getElementById('balance').value = balance + 2 * betAmount.toFixed(2);
  } else if (result !== guess) {
    document.getElementById('balance').value = balance - betAmount.toFixed(2);
    let newLoan = loan + betAmount;
    document.getElementById('loan').value = newLoan.toFixed(2);
    alert(`Better luck next time. You lose ${betAmount}.`);
  } else if (result === null) {
    alert(`you need to place some bets.`)
  }
  
  document.getElementById('guess').value = '';
  document.getElementById('betAmount').value = '';
}
