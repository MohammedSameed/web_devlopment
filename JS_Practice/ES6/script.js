// ES6 


var age = 18;

if(age>=18){
    let  driving = true;

    // if we use var we can acces from outside
    //so we use let and const for that purpose

}
console.log(driving);


var product  = "laptop"
var product = "mobile"

console.log(product)// it gives output like mobile because we can overwrite the var

//thats why we use the  let keyword
let product2= "computer"
product2 ="mobile"
// we can reassign in let

// if we use const we cannot reassign

const product3 = "mango"
product3 = "apple"  // we cannot reassign in const


// if we use const and in it we use object we can change the value then

const age = {
    value : 19
}
age.value = 20;
console.log(age);


//Arrow function 

function greet (){
    console.log("Hello ")
}
greet();// this is how we define the normal function

const addiion = (a , b) => {
    console.log (a+b)

}
addiion(5 ,4); // this is how generally arrow function is but we can use it in oneline


const multiplication = (a,b)=> console.log(a*b) // this is one liner

multiplication (4,6);


const myButton = document.querySelector("#myButton");
console.log(myButton);

const shop = {
 
    price: 100,
    buy: function () {
        myButton.addEventListener("click " , ()=>
        {  // console.log(this);
            console.log("i spent " + this.price);
        });
      
    },
};
shop.buy();


// template , litrels ,  AKA bcktics

const message1 = "hello \n how are you"
console.log(message1);  // general form 

// now using backticks 

const name1 = "sameed"
const message = `hello ${name1}
how are you doing`
console.log(message);

// enhanced object litrals 

// method defination shot hand 

const product = {
    buy(){
        console.log("bought");
    },
}
product.buy; 


// Destructuring

const user = {
    name : "sameed",
    age : 21,
    place :"malegaon",
    dist : "nashik"
}

console.log(user)
console.log(user.name)
console.log(user.age)// this  is te general method we use for the call like user.name

//now using destructuring

const {place , dist} = user;

console.log(place);
console.log(dist);

//destructuring with Array

const data = ["sameed" , 21 , "malegaon " , "Engineer"]

const [ name , age , place2 , profession] = data;

console.log(profession)

// Default parameter

const register = (name ,password , image = "test.png")=>{ // here the = function is for default
console.log(name , password , image);
};
register("sameed" , "1233" , "photo,png");


// Spread ...(used for the cloning purpose of arrays and object)

const languages = ["c" , "c++" , "javascript"];
const newLanguages = [...languages];// for cloning language Array

const newLanguages2 = ["typescript",...languages]//for cloning and adding new element

console.log(newLanguages);
console.log(newLanguages2);


// spread for object

const settings ={
    volume : 100,
    brightness : 50,
}
 
const newsettings = {... settings , contrast:100}
console.log(newsettings);

//REST

const addItems = (...items)=>{
    console.log(items);
};
addItems(2 ,3 ,4 ,5 , 90 , 40);


// For of Loop (used for Array , strin , object ,set , map)//REST

// for Array
const numbers  = [2 ,23, 45,7];

for(const num of numbers){
    console.log(num)
}

// for String

const lang = "javascript"

for(const char of lang){
console.log(char);
}


// for object

const person = {
    name : "sameed",
    place : "malegaon", 
    brand : "addidas",
};

for(const entries of Object.entries(person)){
    console.log(entries);
}


//promises




 












