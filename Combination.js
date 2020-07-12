const testData = [
  1,
  2,
  3,
  4,
  5
]

const testData1 = [
  2,
  123,
  234,
  54,
  542,
  454,
  09,
  12
]

function combination(...params) {
  let result = [...params[0]]
  for (let index = 1; index < params.length; index++) {
    const elem = params[index];
    let nexResult = []
    for (let i = 0; i < result.length; i++) {
      const f = result[i];
      for (let j = 0; j < elem.length; j++) {
        const g = elem[j];
        nexResult.push(f + ' ' + g)
      }
    }
    result = nexResult
  }
  return result
}

console.log(combination(testData, testData1, [12,312,4,32]))
