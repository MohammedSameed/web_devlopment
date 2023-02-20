let fruits= ["apple" , "banana" , "orange"];

fruits.push("mango");
 console.log (fruits.pop());

console.log (fruits);

fruits.unshift("papaya");

console.log(fruits);



const fruits2=["apple", "mango" , "grapes"];

const fruits3=[];
let i =0;
while(i<fruits2.length){
    fruits3.push(fruits2[i].toUpperCase);
    i++;
}
console.log(fruits3)
