const numArray10 = [5,2,6,8,3,12]
const numArray12 = ["c", "a", "b","d"]
function selectionSort1<T>(arr: T[], callback: ((a: T, b: T) => number)): T[] {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (callback(arr[j], arr[minIndex])<0) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
    }
  }
  return arr;
}
const result4 = selectionSort1(numArray10, (a,b)=>{
    return a-b
}) 
const result5 = selectionSort1(numArray12, (a, b) => a.localeCompare(b));
console.log(result4);
console.log(result5);