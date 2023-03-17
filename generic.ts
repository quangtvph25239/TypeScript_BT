const numArray = [5,2,6,8,3,12]
const numArray1 = ["Tran", "Viet", "Quang"]
function selectionSort<T>(arr: T[]): T[] {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];          
            }
        }
    }

    return arr;
}

selectionSort(numArray)

console.log(numArray);