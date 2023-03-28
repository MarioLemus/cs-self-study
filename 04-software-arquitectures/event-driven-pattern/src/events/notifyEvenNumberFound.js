/*
* The function of this section is to emit the event, that will trigger a change
* that the consumer will used
*
* A.K.A: this section is to config the event
*/

import {EventEmitter} from 'node:events'
const numberFoundEmitter = new EventEmitter()

function notifyEvenNumberFound (number) {
    numberFoundEmitter.emit('found', number)
}

export {numberFoundEmitter, notifyEvenNumberFound}