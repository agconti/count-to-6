module.exports = function makeImportant (message, exclamation=message.length) {
  return `${message}${'!'.repeat(exclamation)}`
}