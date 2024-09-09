// Create String
/*
let str = "Apna College";
console.log(str.length);
for(let i=0;i<str.length;i++){
  console.log(str[i]);
}
console.log(str);
*/

// Template Literals
/*
let specialString = `This is a template literals`;
console.log(specialString);
console.log(typeof specialString);

let obj ={
  item : 'pen',
  price : 10,
};

console.log("The price of",obj.item,"is",obj.price,'rupees');
// or
let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
*/

let str = '   Apna JS College  JS   ';
let str2 = 'welcome student';
let newStr = str.toUpperCase();
console.log(str);
console.log(newStr);
console.log(str.trim());
console.log(str.slice(1,9));
console.log(str + str2);
console.log(str.concat(str2));
console.log(str.replace('JS','JavaScript'));
console.log(str.replaceAll('JS','JavaScript'));
console.log(str.charAt(6));