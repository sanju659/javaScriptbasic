/*let arr = ["red", "orange", "yellow"];
arr.forEach((val, indx) => {
    console.log(`item is at index: ${indx} is ${val}`);
});
arr.reverse(); // reverse method that actually reverse the main array
console.log();
arr.forEach((val, indx) => {
    console.log(`item is at index: ${indx} is ${val}`);
});*/


/*let arr = ["red", "orange", "yellow"];
const newColors = arr.toReversed(); //reverse method that make a array with elements from the same array
for (let i = 0; i < newColors.length; i++) {
  console.log(`${i}: ${newColors[i]}`);
}*/


//concatenation of array elements
/*let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3);*/


//entries 
/*let arr = [10, 20, 30, 40, 50, 60];
let arrEntry = arr.entries();
for(let i of arrEntry){
  console.log(i);
}*/


//filter, find, findIndex method in array
/*let words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
let filterWord = words.filter((mind) => mind.length < 8);
console.log(filterWord);
let findWord = words.find((mind) => mind.length < 8);
console.log(findWord);
let findindx = words.findIndex((mind) => mind.length > 8);
console.log(findindx);*/


//forEach method in array
/*let arr = [10, 20, 30, 40];
arr.forEach((val) => console.log(val));*/


//indexOf method in array
/*let arr = [10, 20, 30, 40, 50, 10, 30, 60];
console.log(arr.indexOf(60));
console.log(arr.indexOf(30, 5)); // 30 --> value and 5 --> starting index*/


//join method 
/*let words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
console.log(words.join());
console.log(words.join(''));
console.log(words.join('-'));
console.log(words.join('@'));*/


// keys method
/*let words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
let op = words.keys();
for(let i of op){
  console.log(i);
}*/


// map method
/*let arr = [10, 30, 50, 70, 90];
let map1 = arr.map((val) => val ** 2);
console.log(arr);
console.log(map1);*/


// pop method 
/*let plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants);
console.log();
console.log(plants.pop());
console.log(plants);
console.log();
console.log(plants.pop());
console.log(plants);*/

// push method
/*let plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants);
console.log();
console.log(plants.push('pumpkin'));
console.log(plants);
console.log();
console.log(plants.push('potato', 'carrot', 'papaya'));
console.log(plants);*/



