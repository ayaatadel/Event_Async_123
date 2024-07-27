/***
 * Dom => document object model => BOM => Browser object model
 */
// ==> structure =<page => create
/*** Action 
 * Button => click =>execute especific thing
 * ====>Event 
 * 
 * ==> Action =>is not make thing  on the same element 
 */


// 1- onEvent

// btn.onclick=log;

// function log(){
//     console.log("hello");
// }

// let btn=document.getElementById("btn");
// ==> select element => id===> write id=> and do what you want

// btn.onclick=function click()
// {
//     console.log("welcome");
// }
// btn.onclick=()=>{
//     console.log("hello");
// }


/** AddEventListener=> */

// x++;
// btn.addEventListener('click',()=>{
//     console.log("Hello");
// })


// difference between addEventListener  , onEvent

// 1-> 

// btn.addEventListener('click',()=>{
//     console.log("Hello");
   
// })
// btn.addEventListener('click',()=>{
//     console.log("group");
   
// })
// btn.addEventListener('click',()=>{
//     console.log("123");
   
// })

// btn.onclick=()=>{
//     console.log("hello");
  
// }
// btn.onclick=()=>{
//     console.log("group");
  
// }
// btn.onclick=()=>{
//     console.log("123");
  
// }


// **************************
// btn.addEventListener('click',(event)=>{
//     // console.log("group");
//     console.log(event.target); // element 
   
// })

/*** toggle password */


// let passInput=document.getElementById("pass");
// let btn =document.getElementById("btn");

// btn.addEventListener('click',()=>{
//     if(passInput.type=="password")
//        {
//         passInput.type="text";
//        }
//        else{
//         passInput.type="password";
//        }
// })

// btn.addEventListener('click',()=>{
//     document.body.style.backgroundColor="black";
// })

// let toggle = false;
// let div = null; // Declare div outside so it can be reused

// btn.addEventListener('click', () => {
//     if (!toggle) {
//         card();
//         toggle = true;
//     } else {
//         div.style.display = div.style.display === 'none' ? 'block' : 'none';
//     }
// });

// // let div=document.createElement("div")
// function card() {

 
//     let image=document.createElement("img")
//     let title=document.createElement("p")
//     let btn=document.createElement("button")
//     btn.innerText="AddToCart"
//     title.innerText="card1"
//     image.src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=600"

//     div.style.cssText=`
//     widtd:50px ; 
//     height:100px ;
//     border:1px solid gray;
//     border-radius:5px;
//     margin:5px;;
//     text-align:center;
//     display:block;
    
//     `
//     image.style.cssText=`
//     widtd:100% ;
//      height:30px;
//       margin:5px;
//      `
//     btn.style.cssText=`
   
//       margin:2px;
//      `

//     div.append(image,title,btn);
//     document.body.append(div)
    
// }

// let toggle = false;
// let cardDiv = null; 

// let btn = document.getElementById('btn'); 

// btn.addEventListener('click', () => {
//     if (!toggle) {
//         createCard();
//         btn.innerText="hide card"
//         toggle = true;
//     } else {
//         btn.innerText="show card"
//         cardDiv.style.display = cardDiv.style.display === 'none' ? 'block' : 'none';
//     }
// });

// function createCard() {
//     cardDiv = document.createElement("div");
//     let image = document.createElement("img");
//     let title = document.createElement("p");
//     let cardBtn = document.createElement("button"); 
//     cardBtn.innerText = "AddToCart";
//     title.innerText = "card1";
//     image.src = "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=600";

//     cardDiv.style.cssText = `
//         width: 200px;
//         height: 150px;
//         border: 1px solid gray;
//         border-radius: 5px;
//         margin: 10px;
//         text-align: center;
//     `;

//     image.style.cssText = `
//         width: 50%;
//         height: 70px;
//         margin: 10px;
//     `;

//     cardBtn.style.cssText = `
//         margin: 10px;
//     `;

//     cardDiv.append(image, title, cardBtn);
//     document.body.append(cardDiv);
// }

// let btn =document.getElementById("btn");
// btn.addEventListener('mouseenter',()=>{
//     console.log("hello");
// })
// btn.addEventListener('mouseleave',()=>{
//     console.log("bye");
// })


/****************** */

// function types
// regular , expression , arrowFunction

// Expression function
let say=function hello(num1)
{
    return num1;
}
console.log(say(5));

// function print()
// {
//     console.log("fisrt");
//    second();
//     console.log("third");
// }
// print();

// function second() {
//     console.log("second");
    
// }


// function synchronous => execute line by line
// asynchronous  => time => that execute on it
// setInterval , setTimeOut , event


// setInterval => reapte code depend on time

// setTimeOut=> execute code depend on time


// setInterval(() => {
    
// }, 1000);
// let interval=setInterval(() => {
//     console.log("hello");
// }, 1000);

// setTimeout(() => {
//     clearInterval(interval)
//     // console.log("hello");
// }, 5000);


function print()
{
    console.log("first");
    setTimeout(() => {
    console.log("second");
}, 0);
    setTimeout(() => {
        setTimeout(() => {
        console.log("fourth");
        }, 0);
}, 0);
console.log("third");

}

print();

// setTimeOut ((((((setTimeOut))))))=> call back hell

// promises


