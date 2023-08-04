// Asynchronous js

console.log("hello")

setTimeout(function(){
    console.log("iam from settimeout")
}, 3000); // this will delay for 3 sec (3000 miliseconds) but does not block the next task
//if we give the timeout 0 then also it runs after
console.log("sameed") 


// we can declare the function seperatly also

console.log("yo")

function greeting(){
    console.log("hii how are you")
}
setTimeout(greeting, 4000) 

console.log("hisashiburi")
