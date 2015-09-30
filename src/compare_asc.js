var parse = require('./parse')

/**
 * Compares the two dates and returns -1, 0 or 1.
 * @param {date|string} dirtyDateLeft
 * @param {date|string} dirtyDateRight
 * @returns {number}
 */
var compareAsc = function(dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var timeLeft = dateLeft.getTime()
  var dateRight = parse(dirtyDateRight)
  var timeRight = dateRight.getTime()

  if (timeLeft < timeRight) {
    return -1
  } else if (timeLeft > timeRight) {
    return 1
  } else {
    return 0
  }
}

module.exports = compareAsc
