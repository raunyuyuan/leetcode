
const d = [
  12,
  1334,
  134,
  51,
  1,
  3,
  4,
  454,
  6,
  32,
  5,
  6,
  12
]
const c = [7,5,6,4]
const topBottomMerge = {
  aux: [],
  count: 0,
  merge(arr, lo, mid, hi) {
    const {aux} = this
    let i = lo, j = mid + 1
    for (let k = lo; k <= hi; k++) {
      aux[k] = arr[k]
    }
    for (let k = lo; k <= hi; k++) {
      // 
      if (i > mid) arr[k] = aux[j++];
      else if (j > hi) arr[k] = aux[i++];
      else if (aux[j] < aux[i]) {
        arr[k] = aux[j++]
        this.count += (mid - i + 1)
      }
      else {
        arr[k] = aux[i++]
      }
    }
  },
  sortf(arr, lo, hi) {
    if (hi <= lo) return
    const mid = lo + Math.floor((hi - lo) /2)
    this.sortf(arr, lo, mid)
    this.sortf(arr, mid + 1, hi)
    this.merge(arr, lo, mid, hi)
  },
  sort(arr) {
    const len = arr.length;
    this.count = 0;
    this.aux = arr.slice()
    this.sortf(arr, 0, Math.floor(len - 1 / 2), len - 1)
    console.log(this.count)
  }
}

topBottomMerge.sort(c)
console.log(c, c.length)
