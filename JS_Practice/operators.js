// Assignment operator

let x = 10;

let y ;

y=x;

console.log(y);

//compound operator

let s = 10;
let r = 30;

s+=r;
console.log(s);

//Arithmatic operators

//+ , _ , / 
//x++
//x--

//exponential operator

let c = 10;
console.log (c**2);

//logical operator

//1 . AND operator (&&)

const isLoggedIn = true;
const haspermission = true;

if(isLoggedIn&&haspermission){
    //deelete an item
    console.log("item deleted succesfully");

}

//2 . logical OR (||)

const happy =  false||true ;
console.log(happy);

const sam = true;
const sir = false;

if(sam||sir){
    //deelete an item
    console.log("item deleted succesfully");

}


// 3. logical NOT (!)

const sad = true;
console.log(!sad);
//output will be opposite (false)


//4 . conditional operators (ternary operator)

const userrole = "admin";

if(userrole==="admin"){
    console.log("you are an admin ");

}else{
    console.log("you are not an admin")
}

// syntax for ternary opertor 

//cndition ? "" : ""; example below 

userrole==="admin" ? console.log("you are an admin") : console.log("you are not an admin");

// 5 .  comparision operator

// equal (==)
// not equal (!=)

// strict equal (===)
// strict not equal (!==)

// greater than  (>)
// greater than and equal(>=)

// less than (<)
// less than and equal(<=)

console.log(4==4); // return boolean "true/false"

console.log(4!=5); // return boolean "true/false"

console.log(4==="4"); // return the boolean

console.log(4>3); // return boolean

console.log(3<4); //return boolean

console.log(3<=4); //

console.log(3>= 2); 