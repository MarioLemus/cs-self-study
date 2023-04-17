#!/usr/bin/env node

/* dado n retornar (index), buscar el numero correspondiente en fibonacci */

function fibonacci(n) {
    //         0 1 (last)
    // (last) -1 0

    // sirve para negativos
    let arr = [0]
    if (n < 0) {
        arr.unshift(-1)
        while(true) {
            let last = arr[0]
            let secondLast = arr[1]
            if (last < n) return "Number not part of fibonacci"
            if (last === n) return arr.length - 1
            arr.unshift(last + secondLast)
        }
    }
    // sirve para positivos
    if (n > 0) {
        arr.push(1)
        while(true) {
            let last = arr[arr.length - 1]
            let secondLast = arr[arr.length - 2]
            if (last > n) return "Number not part of fibonacci"
            if (last === n) return arr.length - 1
            arr.push(secondLast + last)
        }
    }
}


// 0, 1, 1, 2, 3, 5, 8(6)
console.log(fibonacci(8))