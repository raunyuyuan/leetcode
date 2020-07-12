function Combination (arr, nums) {
  var ret = [];

  function getRet(origin, target, nums) {
    if (nums === 0) {
      ret[ret.length] = origin;
      return;
    }
    for (var i = 0; i <= target.length - nums; i++) {
      var tmp = origin.slice();
      tmp.push(target[i]);
      getRet(tmp, target.slice(i + 1), nums - 1);
    }
  }
  getRet([], arr, nums);
  return ret;
}
console.log(Combination([1, 2, 3, 4], 3))
