const products = [
{id:1, name:"Leende Chair",color:"black",count:2,price:125.00},
{id:2, name:"Morgon Table Lamp",color:"white",count:1,price:75.00},
{id:3, name:"Mangata Pendant Lamp Light",color:"olive",count:3,price:50.00},
{id:4, name:"Cult 70’s Armchair, matte Chair.",color:"",count:0,price:85.00}
//{id:5, name:"",color:"",count:,price:}
]


//add favorite
const heartBtn = document.getElementById("favorBtn");
const heart = document.getElementById("favor");
heartBtn.addEventListener("click",()=>{
  heart.classList.toggle("material-symbols-outlined-clicked");
})

/////////////////////
let count = 5;
let color = "";
let j = 4;//id of the chair 

const chairCount = document.getElementById("product-counts");



const chairColors = document.querySelectorAll(".color");
chairColors.forEach(function(x){
  x.addEventListener("click",function(e){
  chairColors.forEach((i)=>i.classList.remove("selected"));
    let id = e.currentTarget.id;
    if(id == "color1"){color="grey";
  e.currentTarget.classList.toggle("selected");}
    else if(id == "color2"){color="black";
  e.currentTarget.classList.toggle("selected");}
    else if(id == "color3"){color="green";
  e.currentTarget.classList.toggle("selected");}
  })
})

////////////////////////////////////
//add or remove products
let btns = document.querySelectorAll('.control');

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        if(e.currentTarget.classList.contains(`add-itemNo${j}`)){
        count++;
        }
        if(e.currentTarget.classList.contains(`remove-itemNo${j}`)){
        count--;
        }
        //update product counts 
        chairCount.innerText=count;
        }
)})
////////////////////////////////////////


//add data to cart locally
const addProduct = document.getElementById("add-to-cart");

addProduct.addEventListener("click",function(){

localStorage.setItem("id",j);
localStorage.setItem("count",count);
if(!color){alert("please pick a color first ")}
localStorage.setItem("color",color);
//console.log('done');
})




//////////////////////////////////////
//////////////////////////////////////
let x = [{id:1,name:"sara"},{id:2,name:"john"}];
let y = [{ID:1, mail:["yahoo"]},{ID:2, mail:["yahoo",'gmail','esn']}];

function getUser(userName){
  return new Promise((resolve,reject)=>{
    let name = x.find((i) =>i.name === userName);
    if(name){resolve(name);}else{
    reject("no such user");}
  })
}

function getMail(userID){
return new Promise((res,rej)=>{
  let user = y.find((i)=>i.ID===userID);
if(user){res(user.mail);}else{
rej("wrong id");}
})
}

const result = async (userN)=>{
  try{
  let user = await getUser(userN);
  if(user){
    let list = await getMail(user.id);
console.log(`the mails of the user ${userN} are ${list}`);
  } 
}catch(err){console.log(err);}
}


result("johns");
