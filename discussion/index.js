// ARRAYS
/*
	In contrast to variables, an array can store multiple values. Each value in an array has an index, and each index has a "reference in a memory address". Each value can be accessed by using their indexes. The index of an array starts from zero, and the index of the last element is less by one from the length of the array. 

	An array is a collection of different data types which are ordered an changeable (modifiable). An array allows storing duplicate elements and different data types. An array can be empty, or it may have different data type values.
*/
// How to create an empty array
/*
	In JavaScript, we can create an array in different ways. Let us see different ways to create an array. It is very common to use const instead of let to declare an array variable. If you are using const it means that you do not use that variable name again. 
*/

// Using Array constructor
// syntax
const arr = Array()
// or 
// let arr = new Array()
console.log(arr)

// Using square brackets([])
// syntax
// This is the most recommended way to create an empty list
const arra = [];
console.log(arra);

// How to create an array with values
// Array with initial values. We use length property to find the length of an array

const numbersconst_numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbersconst_numbers)
console.log('Number of numbers:', numbersconst_numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

// Array can have items of different data types
const arraa = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arraa)

// Creating an array using split
// As we have seen in the earlier section, we can split a string at different positions, and we can change to an array. Let us see the examples below. 

let js = 'JavaScript';
const charsInJavaScript = js.split('');

console.log(charsInJavaScript);

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies);

let txt = 
	'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ');

console.log(words);

// Accessing array items using index
/*
	We access each element in an array using their index. An array index starts from 0. The picture below clearly shows the index of each element in the array. 
*/

const fruitsy = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruitsy[0] // we are accessing the first item using its index

console.log(firstFruit) // banana

secondFruit = fruitsy[1]
console.log(secondFruit) // orange

let lastFruit = fruitsy[3]
console.log(lastFruit) // lemon
// Last index can be calculated as follows

let lastIndexy = fruitsy.length - 1
lastFruit = fruitsy[lastIndexy]

console.log(lastFruit)  // lemon

const webTechsy = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.log(webTechsy)        // all the array items
console.log(webTechsy.length) // => to know the size of the array, which is 7
console.log(webTechsy[0])     //  -> HTML
console.log(webTechsy[6])     //  -> MongoDB

let lastIndextrous = webTechsy.length - 1
console.log(webTechs[lastIndextrous]) // -> MongoDB

// Checking Array
// Array.isArray: To check if the data type is an array
const numbers = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers)) // true

const number = 100
console.log(Array.isArray(number)) // false

// Converting array to string
// toString: Converts array to string
const numbersers = [1, 2, 3, 4, 5]
console.log(numbersers.toString()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

// Joining array elements
/*
	join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items. 
*/
const numbersie = [1, 2, 3, 4, 5]
console.log(numbersie.join()) // 1,2,3,4,5

const namesie = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(namesie.join()) // Asabeneh,Mathias,Elias,Brook
console.log(namesie.join('')) //AsabenehMathiasEliasBrook
console.log(namesie.join(' ')) //Asabeneh Mathias Elias Brook
console.log(namesie.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(namesie.join(' # ')) //Asabeneh # Mathias # Elias # Brook

const webTechsyie = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.log(webTechsyie.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechsyie.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

// Slice array elements
/*
	Slice: To cut out a multiple items in range. It takes two parameters: starting and ending position. It doesn't include the ending position. 
*/
  const numbersty = [1,2,3,4,5]

  console.log(numbersty.slice()) // -> it copies all  item
  console.log(numbersty.slice(0)) // -> it copies all  item
  console.log(numbersty.slice(0, numbersty.length)) // it copies all  item
  console.log(numbersty.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position

// Splice method in array
/*
	Splice: It takes three parameters: Starting position, number of times to be removed and number of items to be added.
*/
  const numberso = [1, 2, 3, 4, 5]
  numberso.splice()
  console.log(numberso)                // -> remove all items

  const numbersn = [1, 2, 3, 4, 5]
	numbersn.splice(0,1)
  console.log(numbersn)            // remove the first item

    const numberss = [1, 2, 3, 4, 5, 6]
	numberss.splice(3, 3, 7, 8, 9)
  console.log(numberss.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

// Adding item to an array using push 
// Push: adding items in the end. To add item to the end of an existing array, we use the push method.
// syntax
const arrrr  = ['item1', 'item2','item3']
arrrr.push('new item')
console.log(arrrr)
// ['item1', 'item2','item3','new item']

const numbersery = [1, 2, 3, 4, 5]
numbersery.push(6)
console.log(numbersery) // -> [1,2,3,4,5,6]

numbersery.pop() // -> remove one item from the end
console.log(numbersery) // -> [1,2,3,4,5]

let fruitser = ['banana', 'orange', 'mango', 'lemon']
fruitser.push('apple')
console.log(fruitser)    // ['banana', 'orange', 'mango', 'lemon', 'apple']

fruitser.push('lime')
console.log(fruitser)   // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']

// Removing the end element using pop
// pop: Removing item in the end.
const popnumbers = [1, 2, 3, 4, 5]
popnumbers.pop() // -> remove one item from the end
console.log(popnumbers) // -> [1,2,3,4]

// Removing an element from the beginning
// shift: Removing one array element in the beginning of the array
const shiftnumbers = [1, 2, 3, 4, 5]
shiftnumbers.shift() // -> remove one item from the beginning
console.log(shiftnumbers) // -> [2,3,4,5]

// Add an element from the beginning
// unshift: Adding array element in the beginning of the array
const unshiftnumbers = [1, 2, 3, 4, 5]
unshiftnumbers.unshift(0) // -> add one item from the beginning
console.log(unshiftnumbers) // -> [0,1,2,3,4,5]

// Reversing array order
// reverse: reverse the order of an array.
const numbersg = [1, 2, 3, 4, 5]
numbersg.reverse() // -> reverse array order
console.log(numbersg) // [5, 4, 3, 2, 1]

numbersg.reverse()
console.log(numbersg) // [1, 2, 3, 4, 5]

// Sorting elements in an array
// sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections. 
const webTechsery = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

webTechsery.sort()
console.log(webTechsery) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechsery.reverse() // after sorting we can reverse it
console.log(webTechsery) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

// Array of arrays
// Array can store different data types including an array itself. Let us create an array or arrays.
const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 console.log(fullStack.length)  // 2
 console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
 console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]