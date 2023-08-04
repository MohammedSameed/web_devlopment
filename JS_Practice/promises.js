// scenarios 
//1. registration
// 2 . send welcome email 
//3 . login
//4 . get user data
//5. display user name

function Registration(){
    return new Promise ((resolve , reject) =>{ 
        setTimeout(()=>
        {console.log("registration end")
        resolve();
    }, 5000)
    
});
}
function SendEmail(){
    setTimeout(()=>
    {console.log(" email end")}, 1000)
}
function login(){
    setTimeout(()=>
    {console.log(" login end")}, 1000)
}
function GetUserData(){
    setTimeout(()=>
    {console.log(" got user data ")}, 1000)
}
function displayUserData(){
    setTimeout(()=>
    {console.log(" data dissplayed")}, 1000)
}

// Registration(function(){
//     SendEmail(function(){
//         login(function(){
//             GetUserData(function(){
//                 displayUserData();
//             });
//         });
//     });
// });

Register().
then(SendEmail)
.then(login)
console.log("Other application work")