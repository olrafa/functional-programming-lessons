function giveItBackLater(value, callback) {
    function newFunction() {
        callback(value)
    }
    setTimeout(newFunction, 10)
}

function promiseToGiveItBackLater(value) {
    return new Promise((resolve) => {
        giveItBackLater(value, resolve)
    })
}

function addSomePromises(somePromise) {
    giveItBackLater(value, resolve)
        .then(result => {return(somePromise+somePromise)})
        .catch(error => {return(somePromise+somePromise+somePromise)})
}

module.exports = { giveItBackLater, promiseToGiveItBackLater, addSomePromises }