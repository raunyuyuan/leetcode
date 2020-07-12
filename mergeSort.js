const mergeSort = {
  aux: [],
  reversedCount: 0,
  inplaceMerge(arr, lo, mid, hi) {
    let i = lo, j = mid + 1
    // this.aux = [...arr]
    for (let n = lo; n <= hi; n++) {
      this.aux[n] = arr[n]
    }
    for (let k = lo; k <= hi; k++) {
      if (i > mid) arr[k] = this.aux[j++];
      else if (j > hi) arr[k] = this.aux[i++];
      else if (this.aux[j] < this.aux[i]) arr[k] = this.aux[j++]
      else arr[k] = this.aux[i++]
    }
  },
  auxSort(arr, lo, hi) {
    if (lo === hi) {
      return
    }
    const mid = Math.floor((hi - lo) / 2) + lo
    this.auxSort(arr, lo, mid)
    this.auxSort(arr, mid + 1, hi)
    console.log(lo, mid, hi)
    this.inplaceMerge(arr, lo, mid, hi)
  },
  sort(arr) {
    this.aux = [...arr]
    this.auxSort(arr, 0, arr.length - 1)
  }
}
const a = [12,123,124,145,23,5,12,54,23,421,521,412]
mergeSort.sort(a)
console.log(a)