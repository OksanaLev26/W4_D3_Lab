// // Easy Going

// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }

// // Get Even

// for (let i = 0; i <= 200; i++) {

//     if (i % 2 === 0 && i !== 0) {
//         console.log(i);
//     }
// }

// // Fizz Buzz

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz')
//     } else if (i % 3 === 0) {
//         console.log('Fizz')
//     } else if (i % 5 === 0) {
//         console.log('Buzz')
//     } else {
//         console.log(i);
//     }
// }

// // Wild Wild Life

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
// const sharky = ["Sharky", "shark", 20, "Left Coast"];
// const plantee = ["Plantee", "plant",  5000 , "Mordor"];
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];

// plantee[2] += 1;
// console.log(plantee);
// wolfy[3] = 'Gotham City';
// console.log(wolfy);
// dart.push('Hawkins');
// console.log(dart);
// wolfy[0] = 'Gameboy';
// console.log(wolfy);

// // Yell at the Ninja Turtles

// const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

// for (let turtle of ninjaTurtles) {
//     console.log(turtle.toLocaleUpperCase());
// }

// Methods, Revisited

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies.indexOf('Titanic'));

const newFavMovies = [...favMovies];

newFavMovies.sort();
console.log(newFavMovies);

favMovies.pop();

favMovies.push('Guardians of the Galaxy');

favMovies.reverse();

favMovies.shift();

const newLength = favMovies.unshift();

const index = favMovies.indexOf('Django Unchained');

favMovies.splice(index, 1, 'Avatar');
const arrLength = favMovies.length;

const middleIndex = arrLength/2;

const slicedArr = favMovies.slice(middleIndex);

console.log(slicedArr);
console.log(favMovies);
console.log(favMovies.indexOf('Fast and Furious'));