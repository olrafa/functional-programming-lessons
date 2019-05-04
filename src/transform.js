function groupAdultsByAgeRange(groupOfPeople) {
    return groupOfPeople.filter(person => person.age >= 18)
    .reduce((sortedGroup, currentPerson) => {
        if (currentPerson.age <= 20) {
            sortedGroup['20 and younger'].push({name: currentPerson.name, age: currentPerson.age})
            return sortedGroup }
        if (currentPerson.age <= 30) {
            sortedGroup['21-30'].push({name: currentPerson.name, age: currentPerson.age})
            return sortedGroup}
        if (currentPerson.age <= 40) {
            sortedGroup['31-40'].push({name: currentPerson.name, age: currentPerson.age})
            return sortedGroup}
        if (currentPerson.age <= 50) {
            sortedGroup['41-50'].push({name: currentPerson.name, age: currentPerson.age})
            return sortedGroup}
        else {
            sortedGroup['51 and older'].push({name: currentPerson.name, age: currentPerson.age})}
        return sortedGroup} ,
        {['20 and younger']: [], ['21-30']: [], ['31-40']: [], ['41-50']: [], ['51 and older']: []})
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange