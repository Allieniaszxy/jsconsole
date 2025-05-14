let mystr = "Hello, Javascript World!";

console.log(mystr);
console.log(mystr.toUpperCase);
console.log(mystr.toLowerCase);
console.log(mystr.charAt());
console.log(mystr.indexOf("J"));
console.log(mystr.includes("bob"));
console.log(mystr.replace("Hello", "Welcome to"));
console.log(mystr.split(" "));
console.log(mystr.startsWith("hi"));
console.log(mystr.endsWith("good"));

// number method
let num= 42.678;
let strnum = "89.56";

console.log(num);
console.log(num.toString());
console.log(num.toFixed(2));
console.log(parseInt(strnum));
console.log(parseFloat(strnum));
console.log(isNaN("trhhf"));


// math method
console.log(Math.PI);
console.log(Math.PI.toFixed(2));
console.log(Math.pow(5,2));
console.log(Math.abs(-2));



// functions
function name(name){
    console.log(name)
}

name("ay");
name("charles");

function addNum(a,b){
    console.log(a+b)
}

addNum(13, 12)