// 1
var hello;
console.log(hello);
hello = 'world';
// logs undefined

// 2
var needle = 'haystack';
function test() {
  var needle = 'magnet';
  console.log(needle);
}
test();
// logs magnet

// 3
var brendan = 'super cool';
function print() {
  brendan = 'only okay';
  console.log(brendan);
}
console.log(brendan);
// logs super cool

// 4
var food = 'chicken';
console.log(food);
function eat() {
  var food = 'half-chicken';
  console.log(food);
  food = 'gone';
}
eat();
// logs chicken then half-chicken

// 5
var mean = function () {
  var food = 'chicken';
  console.log(food);
  food = 'fish';
  console.log(food);
};
mean();
console.log(food);
console.log(food);
// errors because food isn't defined in global scope

// 6
var genre;
console.log(genre);
genre = 'disco';
function rewind() {
  var genre = 'rock';
  console.log(genre);
  genre = 'r&b';
}
rewind();
console.log(genre);
// logs undefined, then rock, then r&b, then disco

// 7
var dojo = 'san jose';
console.log(dojo);
function learn() {
  var dojo = 'seattle';
  console.log(dojo);
  dojo = 'burbank';
  console.log(dojo);
}
learn();
console.log(dojo);
// logs san jose, then seattle, then burbank, then san jose

// 8
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = 'closed for now';
  }
  return dojo;
}
console.log(makeDojo('Chicago', 65));
console.log(makeDojo('Berkeley', 0));
// returns {'name': 'Chicago, 'students': 65, 'hiring': true}, then errors for second console log because const can't be redefined
