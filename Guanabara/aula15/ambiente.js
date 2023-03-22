let num = [5, 8, 2, 9, 3]
console.log(`Nosso vetor é o ${num}`)
num [5] = 1
console.log(`Nosso vetor é o ${num}`)
num.push(7)
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(num[1])
for (var pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}
console.log(num.sort())
