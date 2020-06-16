module.exports = function swap(array, i, j) {
  if (i === j) return
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}