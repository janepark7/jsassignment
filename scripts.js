//Assignment 1: Create a two dimension array related to a subject
//that interests you. Output two of the items in sub-arrays to the console.
//My interest is food.
var fruits = ["Apples", "Oranges",];
var vegetables = ["Spinach", "Carrots"];
var foods = [fruits, vegetables];
console.log(foods[0][1]);
//access the first array inside
//then the second item inside that array
console.log(foods[1][0]);
//access the second array inside
//then the first item inside that array

//Assignment 2: Declare a function that takes a name as an argument,
//and returns a new string that compliments that person.

function isCool(name) {
   return name + " is cool"
};
isCool("Jane")
//Jane is cool
isCool("Will")
//Will is cool
isCool("Bob")
//Bob is cool

//Assignment 3: Print the classic "99 bottles"
 var x = 99;
 while (x > -1) {
   console.log ( x + " Bottles of Beer");
   x--;
 }

 //Assignment 4: Declare a function that takes in an array as an argument,
 //and console logs out all of its elements
 var pets = ["Dogs", "Cats", "Rabbits"];
 for (var i = pets.length; i => 0; i--){
   console.log(pets[i]);
 }
