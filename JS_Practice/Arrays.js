const languages = ["javascript", "python ", "java"];
console.log(languages.length);// for length of array

console.log(languages[1]);//for getting specific value

languages.push("c++");// fo radding value at last of array

console.log(languages);

languages.unshift("ruby");// for adding value at start of array
console.log(languages);

languages.pop();
console.log(languages); // for removing the last item

languages.shift();
console.log(languages);// for removing the first item



for(let i =0 ; i<4 ; i++){
    console.log("*");
}

// using loops in arrays 

const actors= [
    {
        name : "actor1",
        payment : 100
    },

    { 
        name : "actor2",
        payment : 150

    },
    { 
        name : "actor3",
        payment : 200

    }
]
// for loop 
for (i=0 ; i<actors.length ; i++){
    actors[i].payment= actors[i].payment-10;

}

console.log(actors);

//foreach loop 

actors.forEach(actors => {
    actors.payment= actors.payment-10;
    
});
console.log(actors);

//for of loop

for (const actor of actors) {
    actor.payment=actor.payment-10;
}
console.log(actors);

//filter

const students = [
    {
        name : "student1",
        marks : 35
    }, 
    {
        name : "student2",
        marks : 45
    },
    {
        name : "student3",
        marks : 60
    }
]

const failedstudent= students.filter((student)=> {
    if(student.marks<45){
        return true;
    }
    else{
        return false ;

    }
})

console.log (failedstudent);

// map

const user = [
    {
        fname : "sameed",
        lastname : "mohammed"
    }
    , 
    {
        fname : "moheed",
        lastname : "mohammed"   
    }
]

const fullname = user.map((user)=>{
 return   {fullname : user.fname+user.lastname};
})

console.log(fullname);

//reduce 

const movies = [
    {
    name : "hello",
    budget : 100

},
{
    name : "matrix",
    budget : 300

},
{
    name : "ddlj",
    budget : 150

}
]
const total = movies.reduce((acc, movie)=>
{
acc = acc +movie.budget;
return acc ;
},0)
console.log(total);

//find

const users = [{
    name : "sameed",
    id : 1
},
{
    name : "moheed", 
    id : 2

},
{
    name : "moammed", 
    id : 3

}
]

//  const myuser= users.find((user)=>{
//     if(id===2){
//         return true;
//     }
// });
// console.log(myuser);

//sort

const names = ["sameed", "moheed" , "john" , "nick"];

names.sort();
console.log(names);