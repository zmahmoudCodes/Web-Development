//Home
//search
const searchBtn = document.getElementById("search-icon");
const input = document.getElementById('search-input');

//new items
const view_all = document.getElementById('view-all');
const new_items=document.querySelector('.new-items');
const newItem = document.querySelectorAll('.new-item');

//categories navbar 
const categories=document.querySelector(".categories");

//detailed items
const detailedItems=document.querySelector(".detailed-items");


//spread new items once btn view-all clicked 
view_all.addEventListener("click",function(){
new_items.classList.toggle('view-new-items');
categories.classList.toggle("hide");
detailedItems.classList.toggle("hide");
});

//navigate new items 
let x=0;
new_items.addEventListener("swiped-left",function(){
    if(x<newItem.length){newItem[x].classList.add('hide');
    x++;}
})

//add effect on navbar when clicking
const navBtns = document.querySelectorAll(".navBtn");
for(let i =0;i<navBtns.length;i++){
    navBtns[i].addEventListener("click",(e)=>{
        navBtns.forEach((btn)=>{btn.classList.remove("selected-btn")});
       e.currentTarget.classList.add("selected-btn");
    })
}



