// Dom(document object model)

//1. getElementById
const heading1 = document.getElementById('heading');
console.log(heading );

//2 . getElemetByTagName
const heading2 = document.getElementsByTagName("h1");
console.log(heading2);

// 3 . getElementByClassName
const heading3 = document.getElementsByClassName('sam')
console.log(heading3)

//4 . queryselector
const heading4 = document.querySelector("#red")
console.log(heading4);

const heading5 = document.querySelector(".white")
console.log(heading5);

// 5 . querySelectorAll
const heading6 = document.querySelectorAll("#sam")
console.log(heading6); 


// traverse DOM

// 1. ParentNode
const heading7 = document.querySelector(".child");
const parent  = heading7.parentNode; 
console.log(parent);


// 2 .childrenNode
const parent2 =document.querySelector(".parent");
console.log(parent2.childNodes);

// 3 .nextElementSibling

const child = document.querySelector(".child");
console.log(child.nextElementSibling);


// 4 .PreviosElementSibling

const subheading = document.getElementsByTagName(h3);
console.log(subheading.previusElementSibling)



//manipulation

const heading = document.querySelector(".heading")
heading.innerHTML = "web dev is awesome"
heading.style.color = "red"
heading.style.fontSize = "100px"
heading.classList.add("title")
heading.classList.remove("heading")


