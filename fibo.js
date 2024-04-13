// fibonacy

function fibonacy(n) {
  if (n <= 1) {
    return 1;
  }
  return fibonacy(n - 1) + fibonacy(n - 2);
}

module.exports = fibonacy;
