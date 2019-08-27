// возведение числа в степень
// x - base, n - exponent / power

var x = prompt('x?');
console.log('x:', x);

var n = prompt('n?');
console.log('n:', n);

function pow(x, n) {
  var result = x;
  for (var i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

if (n < 0) {
  alert("Введите целую положительную степень");
} else if (n==0) {
  alert('1');
  console.log('result: 1');
} else {
  alert('x to the n-th degree =' + pow(x, n));
  console.log('result:', pow(x, n));
}
