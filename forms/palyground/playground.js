//demo of variables and there scope ;

function variblescope() {
  let x = 4;
  //this varible can not be redeclared  or hoisted
  const a = 4; // this value can't be changed ;
  var b = 43;
  var b = 44;
  // you can see the var has global scope as well it can be re declared ;

  d = "hello";
  var d;
  // this is hoisting   that is using varible without declaration or prior declaration
}

//this demonstration of function ;
function tempConverter(input) {
  // this program convert the degree celsius to kelvin
  let output = input + 273;
  return output;
}

let temp = 44;
let tempInKelvin = tempConverter(temp);
console.log("this is temp : " , temp);

//---------------------------------------------------------------------------------------------------------------------------------///

//tutorial of object

const man = {
  age: 44,
  height: 166,
  weight: 44,
  eduction: "undergraduate",
  hobies: ["cricket", "singing", "reading ", "watching movies "],
  ageCalc: function () {
    /* write some code here to calculate age */
    console.log(age);
  },
};

//ways to access object-properties

console.log(man["age"]);
console.log(man.age);

/* string methods    */

let str = "pratik tutkaram samrat";
console.log(str.slice(1, 6)); //slice(start,end);   it handle negative values
console.log(str.substring(4, 8)); //substring(start,end); it does not handle negative values
console.log(str.substr(2, 4)); // substr(start,length) ;

/* console.log(str.replace('pratik','rutik')) it will return new string object and replace first occurence */
// consol.log(str.replaceAll('pratik','rutik')) this will return new string with all occurence got replaced
//note both method are case sensitive for handling insensitive data use / (backslash)

console.log(str.toUpperCase(str));
console.log(str.toLowerCase(str));

let str1 = "    pratik            ";
// console.log(str1.trim()) this will remove both start and end white spaces ;
console.log(str1.trimStart());
console.log(str1.trimEnd());

let a = "33";

console.log(a.padEnd(2, "0")); //enter zerso before no
console.log(a.padEnd(4, "0")); //enter zeros after the no

//method that convert string to array ;

const arr = str.splid(" "); // this string is spliting at spaces " " and the the element of array form accordingly ;

for (let i = 0; i < arr.length; i++) console.log(arr[i]);

//search methods of string

console.log(str.indexOf("samrat")); // this will return the first index and first occurence of the input string ;

const stringDemo = "locate locate  me me ";
console.log(stringDemo.lastIndexOf("me")); // this will return last occurence of give element  ;

console.log(stringDemo.search("me")); // this method is quite similar to the method of indexOf but the difference is that it cannot take second parameter like indexOf and also index of cannot have regex  ;
//syntax : str.search(REGEX) ;

const iterator = stringDemo.matchAll("me"); // returns all occurences of the string ; you can iterate them;

console.log(str.includes("pratik")); // this will return a boolean value (true / false )

//string interpolation method ;
// template literal  tutorial

let first = "pratik";
let last = "samrat";

const full = `${first} this is fname and lname is ${last}`;
console.log(full);

/* Array data type in function  now you can use that  */

const exampleArray = ["a", "b", "c", "d", "f", "e", "m", "l"];

console.log(exampleArray.length);
console.log(exampleArray.toString()); // used to conver array into string; i
console.log(exampleArray.join(" * ")); // this will also join array element with * and then return string ;

console.log(exampleArray.pop()); //same pop  of stack  ;
console.log(exampleArray.push("l")); //same as push of stack ;

//note both mehtod do not output any thing on console.

console.log(exampleArray.shift()); // it willl output the  value ;
console.log(exampleArray.unshift("leemon")); // it will addd this element at begining and unshift remaining values ;

/* syntax : arrayname.concate(arr1,arr2,arr3......n) */

// slice method of array ;

// const arr=exampleArray.slice(2,0,"newly added element using slice") this method will add new element at 2nd positon with zero element removed from array ;

function conditionFun(first, second) {
  return first - second; //for decending it is b-a ;
}
const aNumericArray = [1, 2, 4, 3, 9, 8, 5];
aNumericArray.sort(conditionFun); // sort array follwed by compare function

console.log("max element in array is " + Math.max.apply(null, aNumericArray));
console.log("min element in array is  " + Math.min.apply(null, aNumericArray));

/*

let maxi=-Infinity ;
//fuction to find max element array 
for(let i=0 ;i<aNumericArray.length;i++)
{
   if(maxi<aNumericArray[i])
   maxi=aNumericArray[i] ;
}
console.log(maxi) ;

let mini=Infinity ;
//function to find min element of the array ;
for(let i=0;i<aNumericArray.length;i++) 
{
   if(mini>aNumericArray[i]) 
   mini=aNumericArray[i] ;
}
console.log(mini) ;

*/

aNumericArray.forEach(function (i) {
  console.log(i);
});

// map method of an array

/*
   1) this is one of the most used method in react js 
   2) this will return a new array object with some operations performed on input 
   3) now perform some functions on the array ;
*/

const arrayForMap = [1, 2, 45, 4, 2, 11];
//this will return an array with no multiplied by 2 ;
const newMapArray = arrayForMap.map(
  (callbackfun = function (val, indx) {
    return val * 2;
  })
);

newMapArray.forEach((val, ind) => {
  console.log(indx + ":" + ind);
});

// filter method tutorial
/*
  this filter method is used to filter array elements according to given conditon 
*/

const filterArray = [13, 23, 45, 20, 18, 12, 9]; //array of ages ;

const greaterThan18 = filterArray.filter((val, ind) => {
  return val > 18;
});

greaterThan18.forEach((i) => {
  console.log(i);
});

// reduce function tutorial 

function moduleDEMO()
{
  alert('this is working the modules are working listen ') ;
}

export default {moduleDEMO} ;
