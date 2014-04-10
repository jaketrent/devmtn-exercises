var dec = process.argv[2]

if (!dec)
  console.log('USAGE: node dec-to-bin <decimal>')

var convert = function (num) {
  return divideToZero(num, []).reverse().join('')
}

var divideToZero = function (num, stack) {
  stack.push(num % 2)
  var num = Math.floor(num / 2)
  return num == 0 ? stack : divideToZero(num, stack)
}

console.log(dec + ' -> ' + convert(dec))