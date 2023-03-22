var c = 0
while (c < 100) {
    if (c % 3 === 0 && c % 5 === 0) {
        console.log(`${c} - PING PONG`)
    } else if (c % 3 === 0) {
        console.log(`${c} - PING`)
    } else if (c % 5 === 0) {
        console.log(`${c} - PONG`)
    }
    c+=2
}
