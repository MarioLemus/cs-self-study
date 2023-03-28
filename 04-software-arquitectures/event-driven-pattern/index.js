/*
* event driven pattern
*
* - The componets communicate trought events
* - The components are coupled with independency
* - Use message brokers to act as intermediaries
* - Great scalability and flexibily
* - Great modularity and decoupling among the app's components
*
*
*
*
*
*
* (service > event) < consumer
*
*
*
*
*
*
*/

import {numberFoundEmitter} from './src/events/notifyEvenNumberFound.js'
import {findEvenNumber} from './src/services/findEvenNumberEvent.js'
import {notifyOriginalNumber, notifyModifyNumber} from './src/consumers/index.js'

numberFoundEmitter.on('found', notifyOriginalNumber)
numberFoundEmitter.on('found', notifyModifyNumber)

findEvenNumber()