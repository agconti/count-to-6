module.exports = function average(...numbers) {
  var total = numbers.reduce((previous, current) => previous + current)
  return total / numbers.length
}