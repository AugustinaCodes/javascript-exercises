const findTheOldest = function (obj) {
  const personAge = obj.map((person) => ({
    name: person.name,
    age: person.yearOfDeath - person.yearOfBirth,
  }));

  const oldest = personAge.reduce(getOldest)

  function getOldest(prev, next) {
    return Math.max(prev.age, next.age)
  }

  return oldest;
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
console.log(findTheOldest(people));

// console.log(findTheOldest(people).name);

// Do not edit below this line
module.exports = findTheOldest;
