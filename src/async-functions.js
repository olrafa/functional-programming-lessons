function giveItBackLater(value, callback) {
    value.setTimeout (callback, 300)
}

function promiseToGiveItBackLater(value) {
    
}

function addSomePromises(somePromise) {

}

module.exports = { giveItBackLater, promiseToGiveItBackLater, addSomePromises }