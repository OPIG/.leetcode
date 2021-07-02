
function bubleSort(_array) {
  let arr = [..._array]
  const len = arr.length
  for (let o = len; o >= 2; o--) {
    for (let i = 0; i <= o - 2; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
      }
    }
  }

  return arr
}

const arr = [9, 13, 4, 3, 5, 7, 1, 8,16, 0, 12,18, 2]

console.log('origin sort: ' + arr)
console.log('buble sort: ' + bubleSort(arr))
console.log('result: ' + bubleSort(arr).toString()==arr.sort((a,b)=>a-b).toString())
console.log('arr:' + arr);