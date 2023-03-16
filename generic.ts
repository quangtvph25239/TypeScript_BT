const numArray4 = [4,7,3,8,9,10]
const numArray5 = ["Thi", "Hong", "Anh", "Nga"]
function bubbleSort<T>(arr: T[]): T[] {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];          
            }
        }
    }

    return arr;
}

bubbleSort(numArray5)

console.log(numArray5);