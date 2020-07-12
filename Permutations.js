
const swap = require('./swap')

function swapAccepted(a, start, end) {
  for (let i = start; i < end; i++) {
    if (a[i] === a[end]) {
      return false
    }
  }
  return true
}

function auxPermutation(a, i, len, res) {
  if (i === len) {
    res.push([...a])
  } else {
    // 固定第i个元素，后续继续交换
    for (let j = i; j < a.length; j++) {
      // if (!swapAccepted(a, i, j)) continue
      swap(a, i, j)
      auxPermutation(a, i + 1, len, res)
      
      swap(a, i, j)
    }
  }

}
function Permutations (target, size, origin) {
  var _arr = []
  function getArrange(target, nums, ret) {
      if (nums === 1) {
          for (var i = 0; i < target.length; i++) {
              var tmp = ret.slice();
              tmp.push(target[i]);
              _arr.push(tmp);
          }
      } else {
          nums -= 1;
          for (var i = 0; i < target.length; i++) {
              var tmp = ret.slice();
              var newTarget = target.slice();
              tmp.push(target[i]);
              newTarget.splice(i, 1);
              getArrange(newTarget, nums, tmp);
          }
      }
  }
  getArrange(target, size, origin);
  return _arr;
}
// console.log(Permutations([1, 2, 2, 3], 2, []))

function permutation(a) {
  const res = []
  const len = a.length
  auxPermutation(a, 0, len, res)
  return res
}


console.log(permutation([1, 2, 3]))