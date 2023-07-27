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

// // Methods, Revisited

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// console.log(favMovies.indexOf('Titanic'));

// const newFavMovies = [...favMovies];

// newFavMovies.sort();
// console.log(newFavMovies);

// favMovies.pop();

// favMovies.push('Guardians of the Galaxy');

// favMovies.reverse();

// favMovies.shift();

// const newLength = favMovies.unshift();

// const index = favMovies.indexOf('Django Unchained');

// favMovies.splice(index, 1, 'Avatar');
// const arrLength = favMovies.length;

// const middleIndex = arrLength/2;

// const slicedArr = favMovies.slice(middleIndex);

// console.log(slicedArr);
// console.log(favMovies);
// console.log(favMovies.indexOf('Fast and Furious'));

// // Where is Waldo

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", ["Lucinda", "Jacc", "Neff", "Snoop"], ["Petunia", ["Baked Goods", "Waldo"]]];

// whereIsWaldo.splice(1, 1);

// whereIsWaldo[1][2] = "No One";

// console.log(whereIsWaldo);

// console.log(whereIsWaldo[2][1][1]);

// // Excited Kitten

// for (let i = 1; i <= 20; i++) {
//     console.log(`${i}. Love me, pet me! HSSSSSS!`);
// }

// for (let i = 1; i <= 20; i++) {
//    const phrases = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', '...why does the red dot always get away...' ];
//    const randomIndex = Math.round(Math.random() * 2);
//    if (i % 2 === 0) {
//     console.log(`${i}. ${phrases[randomIndex]}`);
//    } else {
//     console.log(`${i}. Love me, pet me! HSSSSSS!`)
//    }
// }

// // Find the Median

// const getMedian = (arr) => {
//     const middleIndex = Math.floor(arr.length / 2);
//     console.log('mid', middleIndex)
//       const sortedArr = [...arr].sort((a, b) => a - b);
//       console.log('nums', sortedArr)
//     return arr.length % 2 !== 0 ? sortedArr[middleIndex] : (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
//   };
//   console.log(getMedian([14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12]));

// Return of the Closets

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

const kristynsShoe = kristynsCloset.splice(0, 1);
console.log(kristynsShoe);
thomsCloset[2].push(kristynsShoe[0]);
console.log(thomsCloset);

// Dress Us Up

const kristynsOutfit = {
    accessories: kristynsCloset[4],
    shirt: kristynsCloset[2],
    pants: kristynsCloset[3],
}

const tomsOutfit = {
    accessories: thomsCloset[2][1],
    shirt: thomsCloset[0][1],
    pants: thomsCloset[1][2],
}

console.log(`Kristyn is wearing ${kristynsOutfit.accessories}, ${kristynsOutfit.shirt}, ${kristynsOutfit.pants}.`);
console.log(`Tom is wearing ${tomsOutfit.accessories}, ${tomsOutfit.shirt}, ${tomsOutfit.pants}.`);
