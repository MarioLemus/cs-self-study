/*
* Real app logic is implemented here 
*
* when our condition is met, then this section will triggered the preconfig event
*/
import {notifyEvenNumberFound} from '../events/notifyEvenNumberFound.js'

const numbers = [0, 1, 4, 7, 10]

function findEvenNumber() {
    numbers.forEach(n => {
        if (n % 2 === 0) {
            notifyEvenNumberFound(n)
        }
    })
}

export {findEvenNumber}