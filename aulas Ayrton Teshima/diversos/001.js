// TIPOS DE LOOP ARRAY

// 1 for  V arr / i  
const arr = ['a', 'b', 'c']
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// 2 forEach  V arr1 / i1 / val
const arr1 = ['a', 'b', 'c']
arr.forEach((val, i1) => {
    console.log(val)
})

// 3 for of  V arr2 / val1
const arr2 = ['a', 'b', 'c']
for (let val1 of arr2) {
    console.log(val1)
}

// 4 for in  V arr / i2 
const arr3 = ['a', 'b', 'c']
for (let i2 in arr3) {
    console.log(arr[i2])
}

// 5 while  V arr4 / i3 
const arr4 = ['a', 'b', 'c']
let i3 = 0
while (i3 < arr4.length) {
    console.log(arr4[i3])
    i3++
}

// 6 do-while  V arr5 / i4 
const arr5 = ['a', 'b', 'c']
let i4 = 0
do {
    console.log(arr5[i4])
    i4++
} while (i4 < arr5.length)