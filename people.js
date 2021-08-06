const people = ['peter', 'allison', 'stephanie'];
const ages = [20, 25, 30];
console.log(people);


// exporting the people file
module.exports = {
    people: people,
    ages: ages

    // shorthand (only if property === value)
    // people, ages
};