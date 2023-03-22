function parimpar(n) {
    if(n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}
console.log(parimpar(4))

function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(7))
/* n1 e n2 com igual a zero para não retornar NAN (not a number) */