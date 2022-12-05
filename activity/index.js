// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ];

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ];

// 1. Declare an empty array 
let emptyArray = [];
console.log(emptyArray);

// 2. Declare an array with more than 5 number of elements
let moreFiveArr = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];
console.log(moreFiveArr);

// 3. Find the length of your array
console.log(moreFiveArr.length);

// 4. Get the first item, the middle item and the last item of the array
// First Item
console.log(moreFiveArr[0]);

// Middle Item
console.log(moreFiveArr[Math.floor(moreFiveArr.length / 2)]);

// Last Item
console.log(moreFiveArr[moreFiveArr.length - 1]);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

let mixedDataTypes = 
  [ 'Jujutsu Kaisen', 'Japan', 2022, true, 'Philippines', 'Anime'];
console.log(mixedDataTypes);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length);

// 9. Print out each company
// First Item
console.log(itCompanies[0]);

// Middle Item
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);

// Last Item
console.log(itCompanies[itCompanies.length - 1]);

// 10. Print out each company
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
};

// 11. Change each company name to uppercase one by one and print them out

for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
};

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies[0] + ', ' + itCompanies[1] + ', ' + itCompanies[2] + ', ' + itCompanies[3] + ', ' + itCompanies[4] + ', ' + itCompanies[5] + ', and ' + itCompanies[6] + ' are big IT companies.' )