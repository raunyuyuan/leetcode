
const swap = require('./swap')

function auxPermutation(a, i, len, res) {
  if (i === len) {
    res.push([...a])
  } else {
    // 固定第i个元素，后续继续交换
    for (let j = i; j < a.length; j++) {
      swap(a, i, j)
      auxPermutation(a, i + 1, len, res)
      swap(a, i, j)
    }
  }

}

function permutation(a) {
  const res = []
  const len = a.length
  auxPermutation(a, 0, len, res)
  return res
}


console.log(permutation([1, 2, 3]))