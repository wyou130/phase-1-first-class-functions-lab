const names = ['Wendy', 'Ethan', 'Phil', 'Rachel']

const returnFirstTwoDrivers = function(names) {
    const firstTwoDrivers = names.slice(0,2)
    return firstTwoDrivers
}

const returnLastTwoDrivers = function(names) {
    const lastTwoDrivers = names.slice(-2)
    return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//defining fare multiplying function outside the function scope
// function fareMultiplying(fare) {
//     return integer * fare
// }

// function createFareMultiplier(integer) {
//     return fareMultiplying()
// }

//using anonymous function
function createFareMultiplier(integer) {
    return function(fare) {
        return integer * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, oneOfTwoFunctions) {
    return selectDifferentDrivers(names, firstTwoDrivers())
}