for (var cont = 0; cont < 10; cont+=2)
console.log(cont)

var numAlet = [3, 5, 10, 2, 19, 29, 21, 13, 22]
for (var cont = 0; cont < numAlet.length; cont++)
console.log(`${cont} - ${numAlet[cont]}`)

for (var contdecr = numAlet.length -1; contdecr >= 0; contdecr-=2)
console.log(`Posição ${contdecr} com decremento: ${numAlet[contdecr]}`)

var cont = 0
for (; cont < numAlet.length;) {
    console.log(`Sem valor inicial e incremento: ${numAlet[cont]}`)
    cont+=2
}

var cond = true
var contador = 1
for (; cond; ) {
    if (cont % 5 === 0){
    cond = false
}
console.log(`Condição boleana simples: ${contador}`)
++contador
}

for (var i = 0; i < 10; i++) {
    if (i === 5) {
        break
    }
    console.log(`Utilizando break ${i}`) /* sai do loop for */ 
}

for (var i = 0; i < 30; i++) {
    if (i % 2 === 0) {
        continue
    }
    console.log('Utilizando continue', i) /* volta pro loop for */
}
