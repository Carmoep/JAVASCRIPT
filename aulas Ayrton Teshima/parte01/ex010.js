var contador = 0
while (contador < 5) {
    console.log(contador)
    ++contador
}
var contador = 0
while (contador < 5) {
    if (contador === 3) {
        break
    }
    console.log(contador)
    ++contador
}
