var numAlet = [3, 5, 10, 2, 19, 29, 21, 13, 22]
for (var num of numAlet) { /*for of */
    console.log('for of', num)
}
for (var i = 0; i < numAlet.length; i++) {
    console.log('for normal', numAlet[i])
}
for (var x = 1; x <= 5; x++) {
    for (var y = 1; y <= 12; y++) {
        if (y % 2 === 0) {
            continue;
        }
        if (y > 7) {
            break;
        }
        console.log(`x: ${x}; y: ${y}`)
    }
}

for (var i = 0; i < 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, 'ping pong')
    }
    else if (i % 3 === 0) {
        console.log(i, 'ping')
    }
    else if (i % 5 === 0) {
        console.log(i, 'pong')
    }
}