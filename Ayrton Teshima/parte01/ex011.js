var cont = 0
while (cont < 50) {
    console.log(cont)
    ++cont
    if (cont % 3 === 0)
    console.log(`${cont} ping`)
    else if (cont % 5 === 0)
    console.log(`${cont} pong`)
    else (cont % 3 === 0 && cont % 5 === 0)
    console.log(`${cont} ping pong`)
}