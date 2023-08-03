
// function

function login (username , password){
    //code

    console.log(`${username}looged in succesfully`);
}

login(' john ' );


// convert into upper case 

function uppercase(str){

    return str.toUpperCase();
}
const result = uppercase("sameed is the good boy");

console.log(result);


//calculate the area

function calculatearea (heigt , weidth= 1){
    const area = heigt*weidth;
    return area;
}
const area= calculatearea  (  40);
console.log(area);


// variable scope 

const filename = "sameed.pdf";
function download (){

    console.log(filename);

}
download();// if you define the file name outside the function you can call it it inside
 // but if you define inside the function inside you cannot call from outsid

 // function declaration  and function expression 


// // declration

// function login(){

// }

// // expression 

// const sam = function(){

//     console.log("logged in ")

// }
// sam();
// here i dont define the function name but we stored it into the variable it is known
//as expression  


// callback function

function totext(text ,formatcb){

    return typeof formatcb === 'function' ?formatcb (text) :text.toUpperCase()
}
const result2= totext("sameed is coder" , function(text){
    return text.charAt (0).toUpperCase() + text.slice(1);});

console.log(result2);


//immediatly invoke function expressin (IIFE)

(function setup(){

    console.log("yo hisashiburi")
})(); // we wrapped the whole function into the () brackets , we can also remove the func name 



// Arrow functions

const hi =  ()=>{
    console.log("sokamona")
}
hi();


const sum = (num1 , num2 )=>{
      return num1+num2;
}
const result3  = sum(5,6);
console.log(result3);







