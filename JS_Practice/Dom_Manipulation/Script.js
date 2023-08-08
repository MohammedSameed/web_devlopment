// Dom(document object model)

// //1. getElementById
// const heading1 = document.getElementById('heading');
// console.log(heading );

// //2 . getElemetByTagName
// const heading2 = document.getElementsByTagName("h1");
// console.log(heading2);

// // 3 . getElementByClassName
// const heading3 = document.getElementsByClassName('sam')
// console.log(heading3)

// //4 . queryselector
// const heading4 = document.querySelector("#red")
// console.log(heading4);

// const heading5 = document.querySelector(".white")
// console.log(heading5);

// // 5 . querySelectorAll
// const heading6 = document.querySelectorAll("#sam")
// console.log(heading6); 


// // traverse DOM

// // 1. ParentNode
// const heading7 = document.querySelector(".child");
// const parent  = heading7.parentNode; 
// console.log(parent);


// // 2 .childrenNode
// const parent2 =document.querySelector(".parent");
// console.log(parent2.childNodes);

// // 3 .nextElementSibling

// const child = document.querySelector(".child");
// console.log(child.nextElementSibling);


// // 4 .PreviosElementSibling

// const subheading = document.getElementsByTagName(h3);
// console.log(subheading.previusElementSibling)



// //manipulation

// const heading = document.querySelector(".heading")
// heading.innerHTML = "web dev is awesome"
// heading.style.color = "red"
// heading.style.fontSize = "100px"
// heading.classList.add("title")
// heading.classList.remove("heading")


////1. getElementById
// const heading1 = document.getElementById('heading');
// console.log(heading );

// //2 . getElemetByTagName
// const heading2 = document.getElementsByTagName("h1");
// console.log(heading2);

// // 3 . getElementByClassName
// const heading3 = document.getElementsByClassName('sam')
// console.log(heading3)

// //4 . queryselector
// const heading4 = document.querySelector("#red")
// console.log(heading4);

// const heading5 = document.querySelector(".white")
// console.log(heading5);

// // 5 . querySelectorAll
// const heading6 = document.querySelectorAll("#sam")
// console.log(heading6); 


// // traverse DOM

// // 1. ParentNode
// const heading7 = document.querySelector(".child");
// const parent  = heading7.parentNode; 
// console.log(parent);


// // 2 .childrenNode
// const parent2 =document.querySelector(".parent");
// console.log(parent2.childNodes);

// // 3 .nextElementSibling

// const child = document.querySelector(".child");
// console.log(child.nextElementSibling);


// // 4 .PreviosElementSibling

// const subheading = document.getElementsByTagName(h3);
// console.log(subheading.previusElementSibling)



// //manipulation

// const heading = document.querySelector(".heading")
// heading.innerHTML = "web dev is awesome"
// heading.style.color = "red"
// heading.style.fontSize = "100px"
// heading.classList.add("title")
// heading.classList.remove("heading")

// // craete element

// const heading = document.createElement("h1")
// heading.innerHTML= "javascript is awesome"
// const parent = document.querySelector(".parent");
// parent.appendChild(heading); // this method add the it to the last 


// const subheading2 = document.createElement("h3");
// subheading2.innerHTML = "web dev is awesome"
// heading.insertAdjacentElement("beforebegin" , subheading2);
// console.log(heading);


// // Dom events

// const button = document.querySelector("#btn");
// const heading = document.querySelector("#heading");


// button.addEventListener("click" , function(evnt){

//     heading.style.color = "purple"
//     heading.style.fontSize = "100px"
//     console.log("button clicked")
// })


// // bulb on /off project

// const bulbSwitch = document.querySelector("#bulbSwitch");
// const bulb = document.querySelector("#bulb");

// bulbSwitch.addEventListener("click", function(){
//     console.log(bulb.src);
//     if(bulb.src.match("off")){
//         bulb.src = "bulb-on.gif";
//         bulbSwitch.innerHTML="Turn off"
//     }
//     else{
//         bulb.src = "bulb-off.gif";
//         bulbSwitch.innerHTML="Turn on"
//     }
// });

// function dispalyImages(photos){
//     console.log(photos )
// }

// const root = document.querySelector("#root");
// const button = document.querySelector("button")

// function createItem(){
//     const card =  document.createElement("div");
// card.classList.add("card");
// //photo

// const photo = document.createElemen("img");
// photo.src= itemthumbnailUrl;

// //tilte
// const title  = document.createElement("h4");
// title.innerHTML = item.title;
// card.appendChild(photo);
// card.appendChild(title);
// root.appendChild(card);


// }

// function dispalyImages (items){
//     photos.foreach (function(item){
//         createItem(item );

//     })

// } 






// button.addEventListener("click" , function(){
//     fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
// .then((res)=>res.json())
// .then((items)=>{
//     dispalyImages(items);
// }); 
 
// })






