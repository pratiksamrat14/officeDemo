

//array flat method
const arr = [1, 2, [3, 4, 5, 4, [32, 34]], 1];
const flatArr = arr.flat(2);
console.log("Now we are going to falt this array with depth 2");
flatArr.forEach((val, indx) => {
  console.log(indx + ":" + val);
});
console.log(
  "here we get a flatter  array with depth 2 as with this flat element method "
);

// reduce method
console.log("Tutorial to the reduce method ");

const reduceOutput = flatArr.reduce((total, val) => {
  let sum = total + val;
  console.log(sum);
  return sum;
});
console.log("output of reducer function on falt array", reduceOutput);

//reduceright ;
console.log("Reduceright tutorial ");

const reduceRightOp = flatArr.reduceRight((total, val) => {
  const sum = total + val;
  console.log(sum);
  return sum;
});

console.log("see the difference in working of reduce right and reduce ");

// every and some tutorial
//every check if all element passes condition or not and some check if some element passes or not  ;
console.log("see the output of every method ");
const opOfEvery = flatArr.every((val, indx) => {
  // return val>0 ;
  return val > 18; //here outpur will be false
});

console.log("output of every function ", opOfEvery);

console.log("Output of some method where some element passes the conditon ");

const opOfSome = flatArr.some((val, indx) => {
  return val > 18;
});

console.log("Output of some method ", opOfSome);

//IndexOf Method

console.log("Index of METHOD");
const indxeOfMethodOp = flatArr.indexOf(3);
console.log("output of index of method ", indxeOfMethodOp);

console.log("LastIndexOf method and its output ");
console.log(flatArr.lastIndexOf(1));

//find vs findIndex  funciton
/* here is the difference is first find value that passes test case, second find index that passes test */
console.log(
  "out of the find method  for the falt array where an element grater than 18 "
);
console.log(
  flatArr.find((val, indx) => {
    return val > 18;
  })
);

console.log("index of ths same using findIndex function ");
console.log(
  flatArr.findIndex((val, indx) => {
    return val > 18;
  })
);

///  Array.from() method returns the  an array from any iterable object like string ;
console.log("are from tutorial ");
console.log('out of the array from example for the object "ABCDEFGHIJK"');
const arrFromExample = Array.from("ABCDEFGHIJK");
arrFromExample.forEach((val, indx) => {
  console.log(val);
});

console.log("Tutorial of the array key() method ");
const keysArray = flatArr.keys();

for (let x of keysArray) {
  console.log(x);
}

//tutorial of entries funciton in js ;

console.log("tutorial for the array .enteries method ");

const enteriesMethodArr = arrFromExample.entries();

console.log(typeof flatArr);

// speread operator tutorial

console.log("speread ooperator");
const spreadARR = [...flatArr, ...arrFromExample];
console.log("output of spread arr ");
console.log(spreadARR);

//sets in js
console.log("set tutorial");
console.log("set and it's method ");

const setC = new Set(flatArr);
setC.add("100");
console.log("added hundered in it"); // add method to dadd element
console.log(setC);
console.log("set removes duplicate elemetns");
const letters = new Set(["a", "b", "c"]);

// List all Elements
let text = "";
for (const x of letters.values()) {
  text += x;
}
console.log(text);

//map in js


const mapFun=new Map() ;
mapFun.set('a',1);
mapFun.set('b',4) ;
console.log('size of map ',mapFun.size) ;
// alert(mapFun.has('a')) ;
console.log(mapFun.get('a'))
mapFun.delete('a') ;
// console.log(mapFun.size);
mapFun.forEach((val,key)=>{
    console.log(key +"-->"+val) ;
})

//regex  tutorial 
let textt = "Visit W3Schools!";
let n = textt.search("W3Schools");
console.log('regex op',n);


////----------------------------------------------------------------------------------
//tutorial to moduels ;


