/*
* consumer, equivalent to the middlewares consumers section in mvc
*/

// This function consumes the process data comming from event emitter
function notifyOriginalNumber(number) {
    console.log(
        `data from emitter: ${number}`
    )
}

function notifyModifyNumber (number) {
    console.log(
        `the following data has been modify, so can be multiply 2x: ${number * 2}\n`
    )
}

export {notifyOriginalNumber, notifyModifyNumber}