let valores = [8, 1, 7, 4, 2, 9]
console.log(valores[0])
for (pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
for(var pos in valores)/*para cada pos dentro de valores*/{
    console.log(valores[pos]) /*só serve para array*/
}
let p = valores.indexOf(7)
if (p == 0) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 7 está na posição ${p}`)
}
